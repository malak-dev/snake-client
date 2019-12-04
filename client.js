const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('successfully connected to game server');
  });
  conn.on('connect', () => {
    conn.write('Name:SNM');

  });

  
  conn.setEncoding('utf8');

  return conn;
}
module.exports.connect = connect;