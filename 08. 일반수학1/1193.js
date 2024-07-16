const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
const turn = Number(input)

let sum = 0; 
let n = 0; //몇번째 대각선
while(sum<turn){
    n++;//123
    sum=sum+n;
}

//n+1이 분자 + 분모
let ja = 0;
let mo = 0;
let insideindex = sum-turn+1
if(n%2!==0){
    ja = insideindex
    mo = n+1-insideindex
}else{
    ja = n+1-insideindex/1
    mo = insideindex
}

console.log(`${ja}/${mo}`);