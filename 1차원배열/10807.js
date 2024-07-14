const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");
const num = parseInt(input[0]);
const list = input[1].split(" ")
const find = parseInt(input[2]);
let count = 0;

for (let i=0;i<num; i++){
    if(parseInt(list[i])===find){
        count++;
    }
}
console.log(count);