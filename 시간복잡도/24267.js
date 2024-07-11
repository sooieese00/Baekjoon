const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = BigInt(input);

function calculateOperations(n) {
    return (n - 2n) * (n - 1n) * n / 6n;
}

const operations = calculateOperations(n);

console.log(operations.toString());
console.log(3);