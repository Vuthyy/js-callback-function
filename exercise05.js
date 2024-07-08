const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(data);
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    callback();
  });
}

// Scenario:
readFile("input.txt", (data) => {
  const modifiedData1 = data + "\nFirst modification";
  writeFile("output1.txt", modifiedData1, () => {
    readFile("output1.txt", (data) => {
      const modifiedData2 = data + "\nSEcond modification";
      writeFile("output2.txt", modifiedData2, () => {
        readFile("output2.txt", (data) => {
          console.log(data);
        });
      });
    });
  });
});
