// ==UserScript==
// @name         VISION - 视频一键解析
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  在视频网站添加一键解析按钮，直达 VISION Parser 播放。
// @author       3657990021
// @match        *://v.qq.com/x/cover/*
// @match        *://v.qq.com/x/page/*
// @match        *://www.iqiyi.com/v_*
// @match        *://v.youku.com/v_show/*
// @match        *://www.mgtv.com/b/*
// @match        *://www.bilibili.com/video/*
// @icon         https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    // 配置你的解析网站地址 (如果是本地测试请填本地地址，部署后填 GitHub Pages 地址)
    const VISION_HOST = "https://你的GitHub用户名.github.io/你的仓库名/"; 
    // 如果还没部署，可以先写: "http://127.0.0.1:5500/index.html?url="

    const css = `
        #vision-btn {
            position: fixed;
            bottom: 100px;
            right: 20px;
            z-index: 99999;
            background-color: #E50914; /* Netflix Red */
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            transition: all 0.3s;
            border: 1px solid #ff3d47;
            text-decoration: none;
        }
        #vision-btn:hover {
            background-color: #b20710;
            transform: scale(1.05);
        }
    `;

    // 注入样式
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);

    // 创建按钮
    const btn = document.createElement('a');
    btn.id = "vision-btn";
    btn.innerText = "VISION 解析 ▶";
    
    // 点击事件
    btn.onclick = function(e) {
        e.preventDefault();
        // 获取当前页面的 URL
        const currentUrl = window.location.href;
        // 拼接跳转链接 (假设 index.html 接收 ?url= 参数)
        // 注意：这里需要确保你的 index.html 已经部署并支持 url 参数
        // 为了兼容，我们构造完整的跳转链接：
        // 格式：解析接口 + 视频地址
        // 但为了推广你的项目，我们跳转到你的 index.html 并带上参数
        const target = VISION_HOST + "?url=" + encodeURIComponent(currentUrl);
        window.open(target, '_blank');
    };

    document.body.appendChild(btn);

    console.log("VISION Plugin Loaded.");
})();
