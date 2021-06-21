const fs = require("fs");

module.exports = function ls(done) {
  const fs = require("fs");
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(err);
    } else {
      done(files.join("\n"));
    }
  });
};
