const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");
const iterate = Number(input[0]);
let output = "";

for(i=1 ; i<=iterate ; i++){
    let word = input[i];
    output += word[0]+word[word.length-1]+"\n";
}

console.log(output.trim());