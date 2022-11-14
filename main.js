const {app, BrowserWindow} = require('electron');
const nativeImage = require('electron').nativeImage;

let mainWindow;
let image = nativeImage.createFromPath(__dirname + './assets/icons/icon.png'); 
image.setTemplateImage(true);

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        backgroundColor: '#FFF',
        icon: image,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});