const fs = require("fs");

fs.writeFile("test.txt", "Hello", (err) => {
  if (err) throw err;
  console.info(err);
});

fs.appendFile("test.txt", "Update Hello", (err) => {
  if (err) throw err;
  console.info(err);
});

fs.rename("test.txt", "test2.txt", (err) => {
  if (err) throw err;
  console.info(err);
});

fs.unlink("test2.txt", (err) => {
  if (err) throw err;
  console.info(err);
});
