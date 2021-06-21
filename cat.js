module.exports = function cat(done, fileName) {
  const fs = require("fs");
  fs.readFile(fileName, "utf8", (err, contents) => {
    if (err) {
      done(err);
    } else {
      done(contents);
    }
  });
};
