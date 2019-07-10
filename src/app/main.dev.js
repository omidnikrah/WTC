/* eslint global-require: off */

import { app, BrowserWindow, Tray, shell } from 'electron';
import path from 'path';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';

const width = 410;
const height = 330;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  const tray = new Tray(
    path.join(__dirname, '../../resources/icon.png'),
  );

  let window = null;
  const showWindow = () => {
    const trayPos = tray.getBounds();
    const windowPos = window.getBounds();
    const { screen } = require('electron'); // eslint-disable-line
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: screenWidth } = primaryDisplay.size;
    let x = 0;
    let y = 0;

    switch (process.platform) {
      case 'win32':
        x = Math.round(trayPos.x + trayPos.width / 2 - windowPos.width / 2);
        y = Math.round(trayPos.y - height);
        break;
      case 'darwin':
        x = Math.round(trayPos.x + trayPos.width / 2 - windowPos.width / 2);
        y = Math.round(trayPos.y + trayPos.height);
        break;
      case 'freebsd':
      case 'linux':
      case 'sunos':
      default:
        x = screenWidth - width - 10;
        y = 10;
        break;
    }
    window.setPosition(x, y, false);
    window.show();
    window.focus();
  };

  const toggleWindow = () => {
    if (window.isVisible()) {
      window.hide();
    } else {
      showWindow();
    }
  };

  tray.on('right-click', toggleWindow);
  tray.on('double-click', toggleWindow);
  tray.on('click', (event) => {
    toggleWindow();
    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({ mode: 'detach' });
    }
  });

  window = new BrowserWindow({
    width,
    height,
    show: false,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    fullscreenable: false,
    transparent: true,
  });

  window.loadURL(`file://${__dirname}/app.html`);

  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });

  window.on('show', () => {
    tray.setHighlightMode('always');
    tray.setImage(path.join(__dirname, '../../resources/icon-pressed.png'));
  });

  window.on('hide', () => {
    tray.setHighlightMode('never');
    tray.setImage(path.join(__dirname, '../../resources/icon.png'));
  });

  window.webContents.once('did-frame-finish-load', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });

  window.webContents.on('will-navigate', (event, url) => {
    event.preventDefault();
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
    }
  });

  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = 'info';
  autoUpdater.on('update-downloaded', () => {
    window.webContents.send('update-message', 'Update downloaded');
  });
});
