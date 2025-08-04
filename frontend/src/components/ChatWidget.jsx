import React, { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setInputValue('');

        const newMessages = [...messages, { type: 'user', content: userMessage }];
        setMessages(newMessages);
        setIsTyping(true);

        try {
            const conversationHistory = newMessages.map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.content
            }));

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    conversationHistory: conversationHistory.slice(0, -1)
                })
            });

            const data = await response.json();

            if (data.success) {
                setMessages(prev => [...prev, { type: 'ai', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { type: 'ai', content: '申し訳ございませんが、エラーが発生しました。' }]);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { type: 'ai', content: '申し訳ございませんが、接続エラーが発生しました。' }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    const startChat = () => {
        setIsOpen(true);
        if (messages.length === 0) {
            setTimeout(() => {
                setMessages([{
                    type: 'ai',
                    content: 'こんにちは！さくら苑デイサービスの相談窓口です。介護のことでお困りではありませんか？😊'
                }]);
            }, 800);
        }
    };

    return (
        <>
            {/* チャットボタン */}
            {!isOpen && (
                <>
                    {/* 吹き出し案内 */}
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '110px',
                            right: '40px',
                            backgroundColor: 'white',
                            color: '#374151',
                            padding: '12px 16px',
                            borderRadius: '20px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                            fontSize: '14px',
                            fontWeight: '500',
                            zIndex: 999,
                            border: '1px solid #e5e7eb',
                            whiteSpace: 'nowrap',
                            animation: 'bounce 2s infinite'
                        }}
                    >
                        ご質問がある方はこちら ↓
                    </div>

                    <button
                        onClick={startChat}
                        style={{
                            position: 'fixed',
                            bottom: '32px',
                            right: '32px',
                            width: '64px',
                            height: '64px',
                            backgroundColor: '#6366f1',
                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '32px',
                            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                            cursor: 'pointer',
                            fontSize: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            zIndex: 1000
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.3)';
                        }}
                    >
                        💬
                    </button>
                </>
            )}

            {/* チャットウィンドウ */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '32px',
                        right: '32px',
                        width: '320px',
                        height: '600px',
                        backgroundColor: '#000',
                        borderRadius: '30px',
                        boxShadow: '0 20px 80px rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        zIndex: 1000,
                        border: '8px solid #000'
                    }}
                >
                    {/* ヘッダー */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            color: 'white',
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px'
                                }}
                            >
                                🌸
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '18px' }}>さくら苑</div>
                                <div style={{ fontSize: '14px', opacity: 0.9 }}>相談AI・オンライン</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                width: '32px',
                                height: '32px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* メッセージエリア */}
                    <div
                        style={{
                            flex: 1,
                            padding: '24px',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            backgroundColor: '#fafafa'
                        }}
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    gap: '12px',
                                    flexDirection: message.type === 'user' ? 'row-reverse' : 'row'
                                }}
                            >
                                <div
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '18px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px',
                                        flexShrink: 0,
                                        backgroundColor: message.type === 'user' ? '#e5e7eb' : '#e0e7ff'
                                    }}
                                >
                                    {message.type === 'user' ? '👤' : '👩‍⚕️'}
                                </div>
                                <div
                                    style={{
                                        maxWidth: '75%',
                                        padding: '16px 20px',
                                        borderRadius: message.type === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                        fontSize: '15px',
                                        lineHeight: '1.5',
                                        backgroundColor: message.type === 'user' ? '#6366f1' : 'white',
                                        color: message.type === 'user' ? 'white' : '#374151',
                                        boxShadow: message.type === 'user' ? 'none' : '0 2px 12px rgba(0, 0, 0, 0.08)',
                                        fontWeight: message.type === 'user' ? '500' : '400'
                                    }}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                                <div
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        backgroundColor: '#e0e7ff',
                                        borderRadius: '18px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px',
                                        flexShrink: 0
                                    }}
                                >
                                    👩‍⚕️
                                </div>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        padding: '16px 20px',
                                        borderRadius: '20px 20px 20px 4px',
                                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                backgroundColor: '#6366f1',
                                                borderRadius: '4px',
                                                animation: 'typing 1.4s infinite ease-in-out'
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                backgroundColor: '#6366f1',
                                                borderRadius: '4px',
                                                animation: 'typing 1.4s infinite ease-in-out 0.2s'
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                backgroundColor: '#6366f1',
                                                borderRadius: '4px',
                                                animation: 'typing 1.4s infinite ease-in-out 0.4s'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* 入力エリア */}
                    <div
                        style={{
                            padding: '20px 24px',
                            backgroundColor: 'white',
                            borderTop: '1px solid #f1f5f9'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="メッセージを入力してください..."
                                style={{
                                    flex: 1,
                                    padding: '16px 20px',
                                    border: '2px solid #f1f5f9',
                                    borderRadius: '24px',
                                    outline: 'none',
                                    fontSize: '15px',
                                    transition: 'all 0.2s',
                                    backgroundColor: '#fafafa'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#6366f1';
                                    e.target.style.backgroundColor = 'white';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#f1f5f9';
                                    e.target.style.backgroundColor = '#fafafa';
                                }}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!inputValue.trim()}
                                style={{
                                    background: inputValue.trim() ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' : '#e5e7eb',
                                    color: inputValue.trim() ? 'white' : '#9ca3af',
                                    border: 'none',
                                    borderRadius: '24px',
                                    width: '48px',
                                    height: '48px',
                                    cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px',
                                    transition: 'all 0.2s',
                                    flexShrink: 0
                                }}
                                onMouseEnter={(e) => {
                                    if (inputValue.trim()) {
                                        e.target.style.transform = 'scale(1.05)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                ➤
                            </button>
                        </div>
                        <div style={{
                            fontSize: '13px',
                            color: '#9ca3af',
                            textAlign: 'center',
                            marginTop: '12px',
                            fontWeight: '500'
                        }}>
                            「母の介護で困っています」とお試しください
                        </div>
                    </div>
                </div>
            )}

            {/* アニメーション用のスタイル */}
            <style>
                {`
    @keyframes typing {
      0%, 60%, 100% {
        transform: translateY(0);
        opacity: 0.4;
      }
      30% {
        transform: translateY(-10px);
        opacity: 1;
      }
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-5px);
      }
      60% {
        transform: translateY(-3px);
      }
    }
  `}
            </style>
        </>
    );
};

export default ChatWidget;