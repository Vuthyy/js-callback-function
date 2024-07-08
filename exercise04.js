const fs = require("fs");

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    callback();
  });
}

writeFile("output.txt", "Hello, world!!", () =>
  console.log("File written successfully!!")
);
