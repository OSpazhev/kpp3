const electron  = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

let counter = 0;

function create()
{
	win = new BrowserWindow({width: 904, height: 540});
	win.loadURL(`file://${__dirname}/index${counter}.html`);
	win.setMenu(null);
	counter++;
	win.w
}

app.on('ready', create);

app.on('window-all-closed', () => {
	if (counter < 3)
		create(); 
	else if(process.platform !== 'darwin')
	{
		app.quit();
	}
});
