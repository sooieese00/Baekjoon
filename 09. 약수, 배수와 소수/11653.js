const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
let num = Number(input);
let factors = [];


if(num>1){
    for(let i=2 ; i<=Math.sqrt(num) ; i++){
        while(num%i===0){
            factors.push(i);
            num=num/i;
        }
    }
    if(num>1){
        factors.push(num);
    }
}

console.log(factors.join("\n"));