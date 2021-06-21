const curl = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const [cmd, fileName] = data.toString().trim().split(' ');
  const pwd = require("./pwd");
  const ls = require("./ls");
  const cat = require("./cat");
  if (cmd === 'pwd'){
  pwd();
  } else if (cmd === 'ls'){
  ls();
  } else if (cmd === 'cat' && fileName){
  cat(fileName);
  } else if(cmd === 'curl' && fileName){
    curl(fileName);
  }
  //   process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
