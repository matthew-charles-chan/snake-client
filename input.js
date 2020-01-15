const handleUserInput = function (stdin) {
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      process.stdout.write('Thanks for playing!\n');
      process.exit();
    }
  });
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

module.exports = { setupInput }