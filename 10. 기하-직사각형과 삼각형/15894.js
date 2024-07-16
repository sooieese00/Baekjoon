const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
const num = Number(input);

console.log(4*num)