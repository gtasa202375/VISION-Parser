document.getElementById('playBtn').addEventListener('click', () => {
  // 获取当前激活的标签页 URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0].url;
    
    // 这里替换为您部署后的 GitHub Pages 地址
    // 例如: const target = "https://yourname.github.io/vision/?url=" + currentUrl;
    
    // 演示用：使用 im1907 接口直接跳转
    const target = "https://im1907.top/?jx=" + currentUrl;
    
    chrome.tabs.create({ url: target });
  });
});
