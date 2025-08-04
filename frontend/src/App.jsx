import React from 'react';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* ヘッダー */}
      <header style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#f8b4cb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                🌸
              </div>
              <div>
                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#1a365d' }}>さくら苑デイサービス</h1>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>笑顔あふれる毎日を、ともに</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>サービス案内</a>
              <a href="#" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>施設紹介</a>
              <a href="#" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>料金について</a>
              <a href="#" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>アクセス</a>
              <div style={{
                backgroundColor: '#e11d48',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                📞 03-1234-5678
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* メインビジュアル */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/hero-image.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
              心温まる<br />
              介護サービス
            </h2>
            <p style={{ fontSize: '20px', marginBottom: '30px', lineHeight: '1.6' }}>
              ご利用者様とご家族様の笑顔のために<br />
              経験豊富なスタッフが心を込めてサポートいたします
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button style={{
                backgroundColor: '#e11d48',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                サービス資料請求
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '15px 30px',
                border: '2px solid white',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                施設見学予約
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* お知らせ */}
      <section style={{ backgroundColor: '#fef3c7', padding: '15px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            お知らせ
          </div>
          <p style={{ margin: 0, color: '#92400e' }}>2024年8月より、新しいリハビリプログラムを開始いたします</p>
        </div>
      </section>

      {/* サービス紹介 */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1a365d', marginBottom: '15px' }}>
              充実のサービス内容
            </h3>
            <p style={{ fontSize: '18px', color: '#64748b' }}>お一人おひとりの状況に合わせた、きめ細やかなケアを提供します</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fce7f3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '35px'
              }}>
                🧠
              </div>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a365d', marginBottom: '15px' }}>
                認知症専門ケア
              </h4>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                認知症ケア専門士が常駐し、お一人おひとりの症状に合わせた専門的なケアを提供。
                安心してお過ごしいただける環境を整えています。
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8fafc',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '35px'
              }}>
                💪
              </div>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a365d', marginBottom: '15px' }}>
                機能訓練・リハビリ
              </h4>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                理学療法士による個別リハビリテーションプログラム。
                身体機能の維持・向上を目指し、楽しく取り組めるメニューをご用意。
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8fafc',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dcfce7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '35px'
              }}>
                🍱
              </div>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a365d', marginBottom: '15px' }}>
                栄養バランス食事
              </h4>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                管理栄養士監修の美味しく栄養バランスの取れた食事を提供。
                食べやすさにも配慮し、食事の時間を楽しくお過ごしいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金案内 */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1a365d', marginBottom: '15px' }}>
              ご利用料金
            </h3>
            <p style={{ fontSize: '18px', color: '#64748b' }}>介護保険を利用した安心の料金体系</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '50px',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e11d48', marginBottom: '10px' }}>要介護1</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>645円</div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>1回あたり（1割負担）</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e11d48', marginBottom: '10px' }}>要介護2</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>761円</div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>1回あたり（1割負担）</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e11d48', marginBottom: '10px' }}>要介護3</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>883円</div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>1回あたり（1割負担）</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', backgroundColor: '#fef3c7', borderRadius: '10px' }}>
              <p style={{ margin: 0, color: '#92400e' }}>
                ※別途：昼食代 500円、おやつ代 50円、その他実費
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス・問い合わせ */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a365d', marginBottom: '30px' }}>
                アクセス・施設情報
              </h3>
              <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>📍 住所</div>
                  <div style={{ color: '#64748b' }}>〒123-4567<br />東京都渋谷区桜丘町1-2-3 さくらビル2F</div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>🚃 最寄り駅</div>
                  <div style={{ color: '#64748b' }}>JR山手線「渋谷駅」西口より徒歩5分</div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>🕐 営業時間</div>
                  <div style={{ color: '#64748b' }}>月〜金 8:30〜17:30<br />土日祝 休業</div>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1a365d', marginBottom: '5px' }}>🚗 駐車場</div>
                  <div style={{ color: '#64748b' }}>近隣コインパーキングをご利用ください</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a365d', marginBottom: '30px' }}>
                お問い合わせ
              </h3>
              <div style={{
                backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                background: 'linear-gradient(135deg, #e11d48 0%, #be185d 100%)',
                color: 'white',
                padding: '40px',
                borderRadius: '15px',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>お気軽にお電話ください</div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>03-1234-5678</div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>受付時間：平日 9:00〜18:00</div>
              </div>

              <div style={{
                backgroundColor: '#dbeafe',
                padding: '30px',
                borderRadius: '15px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e40af', marginBottom: '15px' }}>
                  💬 AIチャットで24時間相談受付中
                </div>
                <p style={{ color: '#1e40af', marginBottom: '0' }}>
                  介護のお悩み、施設のこと、料金について<br />
                  何でもお気軽にご相談ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ backgroundColor: '#1a365d', color: 'white', padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>さくら苑デイサービス</h4>
            <p style={{ margin: 0, opacity: 0.8 }}>笑顔あふれる毎日を、ともに</p>
          </div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>
            &copy; 2024 さくら苑デイサービス. All rights reserved.
          </div>
        </div>
      </footer >

      {/* チャットウィジェット */}
      < ChatWidget />
    </div >
  );
}

export default App;