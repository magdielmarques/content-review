// the process object provides information about, and control over, the current Node.js process
const { dirname } = require("path");
const process = require("process");

process.on("beforeExit", (code) =>
  console.info("Process exit event with code: ", code)
);

console.info("this message is displayed first");

process.stdin.on("data", (keyboardEvent) => {
  process.stdout.write("What you write....", keyboardEvent);
  process.exit();
});

// print curret path
console.log(__dirname);

// RoyFielding
