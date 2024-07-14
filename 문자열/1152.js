const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ");

const list = input.filter(a=>a!=="")
const output = list.length;
console.log(output);