const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
const num = Number(input);

let i =0;
let numberLast = 1;
let numberStart = 1;
while(true){
    numberLast += i*6 //1,7
    if(num<=numberLast && num>=numberStart){
        console.log(i+1);
        break;
    }else{i++;
         numberStart = numberLast+1;}
}