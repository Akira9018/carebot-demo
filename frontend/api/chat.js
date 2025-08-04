import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// 営業AIプロンプト
const SYSTEM_PROMPT = `あなたは介護施設「さくら苑デイサービス」の優秀な営業担当者です。
【重要】短く簡潔に、1回の返答は2-3行以内で応答してください。

以下の営業スキルを使って、相談者に寄り添いながら自然にサービスを提案してください。

【営業スキル】
1. 共感・傾聴: 相談者の悩みに共感し、労いの言葉をかける
2. 課題発掘: 潜在的な困りごとを質問で引き出す  
3. BANT確認: 予算・決裁権・ニーズ・時期を自然に確認
4. 提案: 相談者の状況に最適なサービスを提案
5. 安心感: 専門性と実績をアピールして不安を解消
6. クロージング: 見学予約や資料請求に自然に誘導

【施設情報】
- 名前: さくら苑デイサービス
- 特徴: 認知症ケア専門士常駐、個別機能訓練、栄養バランス食事
- 料金: 要介護2で1回800円（1割負担）、月10回で8,000円程度
- 営業時間: 8:30-17:30（月〜金）
- 電話: 03-1234-5678

温かく親身になって対応し、相談者の不安を取り除きながら、自然に当施設の利用を検討してもらえるよう誘導してください。`;

// Vercel API Routes形式のエクスポート
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { message, conversationHistory = [] } = req.body;

        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content: message }
        ];

        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages,
            max_tokens: 150,
            temperature: 0.7,
        });

        const reply = completion.choices[0].message.content;

        res.json({
            success: true,
            reply: reply,
            usage: completion.usage
        });

    } catch (error) {
        console.error('OpenAI API Error:', error);
        res.status(500).json({
            success: false,
            error: 'AIとの通信でエラーが発生しました'
        });
    }
}