const curl = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const [cmd, fileName] = data.toString().trim().split(" ");
  const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("prompt > ");
  };

  const pwd = require("./pwd");
  const ls = require("./ls");
  const cat = require("./cat");

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd === "cat" && fileName) {
    cat(done, fileName);
  } else if (cmd === "curl" && fileName) {
    curl(fileName);
  }
});
