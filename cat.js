const fs = require("fs");

module.exports=function(){
  process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const fileName=data.toString().slice(3);
  if(cmd[0,2]==='cat'){
   fs.readFile(fileName, (err, filesData) => {
    if (err) {
      //throw err;
      console.error(err)
      return
    } else {
      process.stdout.write(filesData);
      process.stdout.write("prompt > ");
    }
  });
  }
  process.stdout.write('\nprompt >');
  });
}
// take file -- access code -- print out 
