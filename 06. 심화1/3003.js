const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ").map(Number);
const basis = [1,1,2,2,2,8];
let output = [];

for (i=0; i<6; i++){
     let diff = basis[i]-input[i];
     output.push(diff);
}
console.log(output.join(" "));