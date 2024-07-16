const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("");

const twolist = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
let count = 0;

for(let i=0; i<input.length ; i++){
    if(input.length-i>=3 && input.slice(i, i+3).join("")==="dz="){
        count++;
        i+=2;
    }else if(input.length-i>=2 && twolist.includes(input.slice(i, i+2).join(""))){
        count++;
        i+=1;
    }else{count++;}
}
console.log(count)