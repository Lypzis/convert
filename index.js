const electron = require('electron');
const { app, ipcMain, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: { backgroundThrottling: false }
    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    mainWindow.once('ready-to-show', () => mainWindow.show());
});

ipcMain.on('videos:added', (event, videos) => {
    console.log(event);
});

