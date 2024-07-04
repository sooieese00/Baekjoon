const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n").map(Number);

for(let i=0 ; i<input.length-1 ; i++){
    let list = [];
    let temp =input[i]
    if(temp===-1){break;}
    let sum= 0;
    for(let j=1 ; j<temp; j++){
        if(temp%j===0){
            sum+=j
            list.push(j)
        }
    }if(temp === sum){
        console.log(temp, "=", list.join(" + "))
    }else{console.log(temp, "is NOT perfect.")}
}