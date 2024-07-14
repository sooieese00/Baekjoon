const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const iterate = Number(input[0]);
const num = input[1];
let output = 0;

for (i=0 ; i<iterate ; i++){
    output += Number(num[i]);
}
console.log(output);