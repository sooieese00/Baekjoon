const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");

const num = Number(input[0]);
let list = [];
for(let i=0; i<100; i++){
    list.push(Array(100).fill("x"));
}


for (let i = 1; i <= num; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    for (let h = 0; h < 10; h++) {
        for (let w = 0; w < 10; w++) {
            if (h + b < 100 && w + a < 100) {
                list[h + b][w + a] = 'o';
            }
        }
    }
}

const relist = list.flatMap(row=>row)
const result = relist.filter(a=>a==="o")

console.log(result.length)