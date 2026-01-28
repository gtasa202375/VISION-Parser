const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#141414',
    title: 'VISION Desktop',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false
    }
  });

  // 隐藏默认菜单栏，打造沉浸式体验
  Menu.setApplicationMenu(null);

  // 加载您的在线地址 (推荐) 或 本地 HTML
  // win.loadFile('../index.html'); 
  // 或者直接加载您的 GitHub Pages:
  // win.loadURL('https://GTASA7780.github.io/VISION-Parser/');
  
  // 暂时加载本地 index.html 用于演示，请确保路径正确
  win.loadFile(path.join(__dirname, '../index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
