const {app, BrowserWindow} = require('electron')
    const path = require('path')
    const url = require('url')

    function createWindow() {
        // Create the browser window
        win = new BrowserWindow({width: 800, height: 600})

        // Load the index of the app
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }))
        //win.loadURL('https://notion.so')
    }

    app.on('ready', createWindow)