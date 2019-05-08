const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
// let postWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680, webPreferences: { webSecurity: false } });
    //postWindow = new BrowserWindow({ width: 600, height: 680, parent: mainWindow, show: false });

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);

    // postWindow.loadURL(isDev ? 'http://localhost:3000/image' : `file://${path.join(__dirname, '../build/index.html')}`);
    // postWindow.on('closed', (e) => {
    //     postWindow = null;
    // });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('toggle-image', (event, arg) => {
    imageWindow.show();
});