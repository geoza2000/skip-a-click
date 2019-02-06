
const { app, BrowserWindow, Menu, Notification } = require('electron')
const Store = require('./store.js');
let mainWindow

// First instantiate the class
const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    // 800x600 is the default size of our window
    windowBounds: { width: 1000, height: 600 }
  }
});

function createWindow() {
  // Create the browser wi
  let { width, height } = store.get('windowBounds');

  mainWindow = new BrowserWindow({
    minHeight: 300,
    minWidth: 300,
    width,
    height,
    frame: false //Disables Sys UI
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  mainWindow.toggleDevTools()
  mainWindow.on('resize', () => {

    let { width, height } = mainWindow.getBounds();
    store.set('windowBounds', { width, height });
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}


app.on('ready', function () {
  createWindow()

  /*const template = [
    {
      label: 'Mail',
      click:function(){
        mainWindow.loadURL('http://mail.crowdpolicy.com/');  
      }
    },
    {
      label: 'Slack',
      click:function(){
        mainWindow.loadURL('https://crowdpolicy.slack.com/');
      }
    },
    {
      label: 'Jira',
      click:function(){
        mainWindow.loadURL('https://crowdpolicy2.atlassian.net');
      }
    }
  ]
  
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  */
  //
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})
