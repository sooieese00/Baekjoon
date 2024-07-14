const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
const num = Number(input);
let output = "";
for(let i=1;i<=num; i++){
    output += " ".repeat(num-i);
    output += "*".repeat(2*i-1)+"\n";
}
for(let i=1;i<num; i++){
    output += " ".repeat(i);
    output += "*".repeat(2*num-1-2*i)+"\n";
}

console.log(output.slice(0, -1));