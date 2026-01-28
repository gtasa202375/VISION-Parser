👁️ VISION Parser Ecosystem
<div align="center">
一个极简、安全、全平台覆盖的 VIP 视频解析生态系统。


Minimalist. Secure. Cross-Platform.
查看演示 Demo · 报告 Bug · 请求功能
</div>
📖 项目简介 (Introduction)
VISION Parser 是一款极简主义的网页视频解析工具。采用沉浸式暗黑风格设计（VISION UI），旨在为用户提供纯净、无干扰的观影辅助体验。
本项目完全开源，基于纯前端技术栈构建，并配备了完整的后端与工具链生态。
✨ 核心特性
 * 极致设计：类似 Netflix 的 VISION 暗色主题，视觉舒适
 * 响应式布局：完美适配桌面、平板和移动端
 * 极简操作：一键解析，支持回车快速播放，Esc 一键清空
 * 纯净体验：移除冗余线路，内置稳定解析接口，拒绝广告干扰
 * 零依赖：纯 HTML/JS 实现，无需后端，通过 CDN 加载 Tailwind CSS
 * 企业级安全：内置 CSP、Iframe Sandbox 及 XSS 防护机制
📂 项目结构 (Ecosystem)
本项目包含全套多端适配方案：
vision-parser/
├── 📄 index.html        # [Web] 核心网页 (PC/Mobile)
├── 📄 tv.html           # [TV] 电视/投影仪大屏版
├── 📂 desktop-app/      # [PC] Windows/Mac 桌面客户端 (Electron)
├── 📂 extension/        # [Plugin] Chrome/Edge 浏览器插件
├── 📂 tools/            # [CLI] Go/Python 命令行工具 & 安全审计脚本
├── 📂 core/             # [Backend] Rust 高性能代理核心
├── 📂 server/           # [API] Node.js API 服务
├── 📄 Dockerfile        # [DevOps] 容器化部署配置
└── 📄 install.sh        # [Script] 极客风格自动安装脚本

🚀 快速开始
本地运行
 * 克隆或下载本仓库
 * 直接双击 index.html 文件，在浏览器中打开即可使用
极客安装 (Hacker Style)
如果您是 Linux/Mac 用户，可以使用内置脚本进行自动化安装：
chmod +x install.sh
./install.sh

🌍 多种部署方式 (Deployment)
本项目是纯静态页面，支持多种部署方式，您可以根据需求选择最适合的一种。
1. GitHub Pages (推荐/最简单)
无需服务器，完全免费。
 * Fork 本仓库。
 * 进入仓库的 Settings -> Pages。
 * 在 Source 下选择 main 分支并保存。
 * 等待片刻，即可获得在线访问链接。
2. Vercel / Netlify (极速)
适合追求全球访问速度的用户。
 * 在 Vercel 或 Netlify 注册账号。
 * 导入您的 GitHub 仓库。
 * 点击 Deploy，即可自动部署并获得免费 HTTPS 域名。
3. Linux 服务器 (Nginx/Apache)
如果您有自己的云服务器 (VPS)：
 * 安装 Nginx: sudo apt install nginx (Ubuntu/Debian) 或 yum install nginx (CentOS)。
 * 将项目中的 index.html 上传至服务器的网站根目录（通常是 /var/www/html/ 或 /usr/share/nginx/html/）。
 * 访问您的服务器 IP 或域名即可。
4. 宝塔面板 (BT Panel)
国内用户常用的可视化面板：
 * 在宝塔面板中点击“网站” -> “添加站点”。
 * 输入您的域名，PHP 版本选择“纯静态”。
 * 进入网站根目录，删除默认文件，将本项目的 index.html 上传即可。
5. Docker 部署
如果您习惯使用容器化部署，可以使用 Nginx 镜像快速启动：
# 构建镜像
docker build -t vision-parser .

# 启动容器
docker run -d -p 8080:80 --name vision-container vision-parser

运行后，访问 http://localhost:8080 即可。
🛠️ 高级功能与配置
客厅电视版 (TV Mode)
在电视浏览器中访问 tv.html。
 * 大字体设计：专为远距离观看优化。
 * 遥控器适配：支持方向键、确认键和返回键操作。
命令行工具 (CLI)
进入 tools/ 目录，编译并运行 Go 工具，体验终端极速解析：
cd tools
go run main.go

接口配置
核心逻辑位于 index.html 文件底部的 <script> 标签内。若要更换解析接口，只需修改以下变量：
| 变量名 | 默认值 | 说明 |
|---|---|---|
| API_URL | "https://im1907.top/?jx=" | 视频解析接口前缀 URL |
🤝 联系方式
有任何问题或建议，欢迎联系作者：
 * Email：3657990021@qq.com
 * QQ：3657990021
 * Telegram：@GTASA7780
⚠️ 免责声明
 * 本项目仅供学习交流使用，旨在研究 HTML5 与 CSS3 布局技术及 Web 安全防御机制。
 * 本项目不提供任何视频资源，也不参与任何视频录制或上传。
 * 解析接口来源于网络，版权归原作者所有。
 * 请勿将本项目用于任何商业用途，请支持正版视频。
<div align="center">
&copy; 2026 VISION Parser Tool · Open Source Project
</div>
