
const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");

let xList = [];
let yList = [];

for (let i =0 ; i<3 ; i++){
    let line = input[i].split(" ").map(Number);
    xList.push(line[0]);
    yList.push(line[1]);
}

let outputX = 0;
if(xList[0]===xList[1]){
    outputX = xList[2];
}else if(xList[1]===xList[2]){
    outputX = xList[0];
}else{outputX = xList[1];}

let outputY = 0;
if(yList[0]===yList[1]){
    outputY = yList[2];
}else if(yList[1]===yList[2]){
    outputY = yList[0];
}else{outputY = yList[1];}

console.log(outputX, outputY)