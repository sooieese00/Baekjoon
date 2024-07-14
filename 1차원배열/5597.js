const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n").map(Number);

const list = [];
for (i=1; i<=30 ; i++){
    if (!input.includes(i)){
        list.push(i);
    }
}

console.log(Math.min(...list));
console.log(Math.max(...list));