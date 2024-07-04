const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const iterate = Number(input[0]);

let result = [];
const [qq, dd, nn] = [25,10,5];

for (i=1 ; i<=iterate; i++){
    let temp = [];
    let money = Number(input[i]);
    let a = Math.floor(money/qq);
    temp.push(a)
    let b = Math.floor((money%qq)/dd);
    temp.push(b)
    let c = Math.floor(((money%qq)%dd)/nn);
    temp.push(c)
    let d = ((money%qq)%dd)%nn
    temp.push(d)
    result.push(temp)
}

result.forEach(row=> console.log(row.join(" ")))