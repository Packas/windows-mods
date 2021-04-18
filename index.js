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

//auto-updates
app.on('ready', function()  {
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//ignore boxes while running app
ipcMain.on('set-ignore-mouse-events', (event, nothin) => {
  BrowserWindow.fromWebContents(event.sender).setIgnoreMouseEvents(nothin)
})

//launch on startup
var AutoLaunch = require('auto-launch');
var autoLauncher = new AutoLaunch({
    name: "Windows-mods"
});

autoLauncher.isEnabled().then(function(isEnabled) {
  if (isEnabled) return;
   autoLauncher.enable();
}).catch(function (err) {
  console.log(err);
});
