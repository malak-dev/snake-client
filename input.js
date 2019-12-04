let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    }
  });
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0077') {
      conn.write(`Move: up`, err => { if (err) throw err })
    }
  });
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0061') {
      conn.write(`Move: left`, err => { if (err) throw err })
    }
  });
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0073') {
      conn.write(`Move: down`, err => { if (err) throw err })
    }

  });
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0064') {
      conn.write(`Move: right`, err => { if (err) throw err })
    }

  });
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0069') {
      conn.write(`Say: hello`, err => { if (err) throw err })
    }

  });

  return stdin;
}
module.exports.setupInput = setupInput;