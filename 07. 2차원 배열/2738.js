const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const a = input.slice(1, n+1).map(line => line.split(" ").map(Number));
const b = input.slice(n+1).map(line => line.split(" ").map(Number));

const output = a.map((cur, index) => cur.map((val, i) => val+b[index][i]))

output.forEach(row=> console.log(row.join(" ")))