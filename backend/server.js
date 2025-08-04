const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// ミドルウェア
app.use(helmet());
app.use(cors());
app.use(express.json());

// レート制限
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分
    max: 100 // 最大100リクエスト
});
app.use(limiter);

// ルート
const chatRoutes = require('./routes/chat');
app.use('/api/chat', chatRoutes);

// 基本ルート
app.get('/', (req, res) => {
    res.json({ message: 'CareBot API Server' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});