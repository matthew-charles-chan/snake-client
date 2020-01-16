const net = require('net');

const { IP, PORT } = require('./constants')

process.stdin.resume();


const connect = function(cb) {

  // asigns client connection to 'conn'
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfuly connected!');
    // Sets name;
    //  THIS ASKS FOR USER INPUT ON CMD LINE
    process.stdout.write('Your Name: ');
    
    // defines getName function
    const getName = (data) => {
      conn.write(`Name: ${data}`);

      // once name entered (user presses 'enter'),  getName listener removed
      process.stdin.removeListener('data', getName);
      
      
      // callback function to run 'setupInput' function, takes 'conn' as a parameter
      cb(conn);
    };

    // calls getName function
    process.stdin.on('data', getName);
  });

  // if server sends data, console.log that data
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };