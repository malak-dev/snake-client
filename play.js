const net = require('net');
const { connect } = require('./client');
console.log('Connecting ...');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput ) => {
    if (handleUserInput === '\u0003') {
      process.exit();}
    });
  return stdin;
}

connect();
setupInput();