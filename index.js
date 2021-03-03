const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron
const {autoUpdater} = require("electron-updater");
var win; 

function createWindow () {
  win = new BrowserWindow({
    width: 1000,
    height: 1000,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true
    }
  })
  win.show()
  win.loadFile('index.html')
  win.maximize()
}

app.whenReady().then(createWindow)


app.on('ready', function()  {
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('set-ignore-mouse-events', (event, nothin) => {
  BrowserWindow.fromWebContents(event.sender).setIgnoreMouseEvents(nothin)
})