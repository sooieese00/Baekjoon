const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n").map(Number);

let left = input.map((a) => a%42);

const uniqueLeft = new Set(left);
console.log(uniqueLeft.size);