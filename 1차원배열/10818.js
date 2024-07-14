const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");

const num = Number(input[0]);
const array = input[1].split(" ");

const max = Math.max(...array);
const min = Math.min(...array);

console.log(min, max)