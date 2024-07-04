const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
const num = Number(input);
let temp = 2;
for(i=1 ; i<=num ; i++){
    temp =2*temp-1;
}
console.log(temp**2);
