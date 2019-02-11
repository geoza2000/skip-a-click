var os = require('os');
var pty = require('node-pty');
const { Terminal } = require('xterm');
const fit = require('xterm/lib/addons/fit/fit');

//Opens a local shell on the computer the app running.
const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 100,
    rows: 30,
    cwd: process.cwd(),
    env: process.env
});

//Applies the add(s) on on the terminal.
Terminal.applyAddon(fit);

//Creates the instance of the terminal.
var term = new Terminal({
    cursorBlink:true //Enables cursor blink
});
term.open(document.getElementById('terminal'));
term.fit(); //Takes the correct width and heigth for the window the terminal runs.

// ptyProcess.write('ssh geoza@egov.blockchain.crowdpolicy.com\r'); //Run cmd in the init of the shell.



// Setup communication between xterm.js and node-pty
term.on('data', (data) => {
    ptyProcess.write(data);
});
ptyProcess.on('data', function (data) {
    term.write(data);
});
