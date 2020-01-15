const net = require('net');

process.stdin.resume();

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.45',
    port: 50541
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('success')
    conn.write(`Name: MCC`);
  });


  conn.on('data', (data) => {
    console.log(data)
  });
  return conn;
}

module.exports = { connect };