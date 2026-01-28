/**
 * VISION Parser API Service
 * A lightweight Node.js Express server to handle parsing requests programmatically.
 * * Run: node app.js
 * Usage: GET http://localhost:3000/api?url=YOUR_VIDEO_URL
 */

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// 核心配置
const CONFIG = {
    // 可以在这里配置多个接口轮询
    provider: "https://im1907.top/?jx=",
    version: "1.0.0",
    maintainer: "3657990021@qq.com"
};

// 允许跨域调用
app.use(cors());

// 欢迎页
app.get('/', (req, res) => {
    res.json({
        project: "VISION Parser API",
        status: "Running",
        docs: "Pass 'url' parameter to /api endpoint",
        author: CONFIG.maintainer
    });
});

// 核心解析接口
app.get('/api', (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({
            error: true,
            message: "Missing 'url' parameter. Please provide a valid video URL."
        });
    }

    // 构建解析结果
    const result = {
        original_url: videoUrl,
        parsed_url: CONFIG.provider + videoUrl,
        timestamp: new Date().toISOString(),
        engine: "VISION-Core/v1"
    };

    // 在这里可以添加更多逻辑，比如记录日志、验证 URL 有效性等
    console.log(`[LOG] Parsed: ${videoUrl}`);

    res.json(result);
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`
    🚀 VISION API Server is running!
    --------------------------------
    Local:   http://localhost:${PORT}
    Example: http://localhost:${PORT}/api?url=https://v.qq.com/x/cover/...
    `);
});
