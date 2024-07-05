const fs = require('fs');
const input = fs.readFileSync(0, "utf8");
const [x,y,w,h] = input.split(" ").map(Number);

const list = [x, w-x, y, h-y];

console.log(Math.min(...list));