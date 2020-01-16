let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};


const handleUserInput = function (stdin) {
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      process.stdout.write('Thanks for playing!\n');
      process.exit();
    }
    if (key === "w") {
      connection.write('Move: up')
    }
    if (key === "a") {
      connection.write('Move: left')
    }
    if (key === "s") {
      connection.write('Move: down')
    }
    if (key === "d") {
      connection.write('Move: right')
    }
  });
};
module.exports = { setupInput };