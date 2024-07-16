const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n")

const line1 = input[0].split(" ")

const basketNumber = Number(line1[0]);
const actionNumber = Number(line1[1]);
const array = [];

for (let i =0 ; i<basketNumber ; i++){
    array.push(0);
}

for (let j =1 ; j<=actionNumber ; j++){
    let line = input[j].split(" ")
    let start = Number(line[0])
    let end = Number(line[1])
    let ball = Number(line[2])
    for (let k = start ; k<=end ; k++){
        array[k-1]=ball
    }
}

console.log(array.join(" "))