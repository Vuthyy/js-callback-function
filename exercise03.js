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

readFile("input.txt", console.log);
