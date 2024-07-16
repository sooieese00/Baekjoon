const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const iterate = Number(input[0]);
let output = ""
for(i=1 ; i<=iterate ; i++){
    let line = input[i].split(" ");
    let num = Number(line[0]);
    let word = line[1];
    for(j=0 ; j<word.length; j++){
        output += word[j].repeat(num);
    }output += "\n";
    
}
console.log(output.trim())