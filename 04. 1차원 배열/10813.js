const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");

const line0 = input[0].split(" ");
const basketNumber = Number(line0[0]);
const actionNumber = Number(line0[1]);
const array =[];

for (let i=1 ; i<=basketNumber;i++){
    array.push(i);
}

for (let j =1 ; j<=actionNumber ; j++){
    let line  = input[j].split(" ");
    let basket1 = Number(line[0])-1;
    let basket2 = Number(line[1])-1;
    [array[basket1], array[basket2]] = [array[basket2], array[basket1]];
}
console.log(array.join(" "));