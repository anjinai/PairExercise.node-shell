function cat(fileName) {
  const fs = require("fs");
  fs.readFile(fileName, "utf8", (err, contents) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(contents);
      process.stdout.write("prompt > ");
    }
  });
}

module.exports = cat;
