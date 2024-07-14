const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("");
const length = input.length;
let flag = 1;

for(let i=1; i<=Math.floor(length/2) ; i++){
    if(input[i-1]==input[length-i]){
        flag =1;
    }else{
        flag=0;
        break;}
}
console.log(flag)
