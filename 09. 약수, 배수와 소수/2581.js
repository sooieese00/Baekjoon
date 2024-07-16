const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n").map(Number);
const N = Number(input[0]);
const M = Number(input[1]);
let list = [];
let sum = 0;

for(let i = N ; i<=M ; i++){
    let cnt = 0;
    if(i===1){continue;}
    if(i===2){list.push(i);
              sum+=i;
              continue;}
    for(let j =2 ; j<i ; j++){
        if(i%j===0){break;
                       }else{cnt++;}
        }if(cnt==i-2){list.push(i); 
                    sum+=i;}
    }


if(list.length===0){console.log(-1)}else{
    console.log(sum);
    console.log(list[0]);
}