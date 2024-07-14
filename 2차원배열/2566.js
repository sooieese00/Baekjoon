const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n")
const list = input.join(" ").split(" ").map(Number);

const max = Math.max(...list);
let index = 0;
for (let i=0 ; i<81 ; i++){
    if(list[i]===max){
        index = i;
        break;
    }
}

console.log(max)
console.log(Math.floor((index)/9)+1, index%9+1)