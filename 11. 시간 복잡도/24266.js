const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = BigInt(input);


console.log(`${n * n * n}`);

console.log(3);
