const fs = require("fs");

function readFile(filePath, getReadFle) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    getReadFle(data);
  });
}

// Example usage:
readFile("input.txt", console.log);
