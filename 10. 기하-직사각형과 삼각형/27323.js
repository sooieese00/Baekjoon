const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();

const [a, b] = input.split("\n").map(Number);

console.log(a*b)