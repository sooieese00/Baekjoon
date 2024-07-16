const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");

let max = Number(input[0]);
let order = 1;

for (let i = 1 ; i<9 ; i++){
    let currentItem = Number(input[i]);
    if(currentItem >max){
        max = currentItem;
        order = i+1;
    }
}

console.log(max);
console.log(order);