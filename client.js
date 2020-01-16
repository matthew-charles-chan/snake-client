const net = require('net');

process.stdin.resume();


const connect = function(cb) {
  const conn = net.createConnection({
    host: '192.168.88.45',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfuly connected!');
    // Sets name;
    //  THIS ASKS FOR USER INPUT ON CMD LINE
    process.stdout.write('Your Name: ');
    const getName = (data) => {
      conn.write(`Name: ${data}`);
      process.stdin.removeListener('data', getName);
      //close stdin
      cb(conn);
    };
    process.stdin.on('data', getName);
    // MOVES UP ONCE UPON CONNECTION
    // move up on connection
    // conn.write('Move: up');

    // MOVES LEFT CONTINUOSLY UPON CONNECTION
    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 100)
    
    // conn.write('Move: left');

  });
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };