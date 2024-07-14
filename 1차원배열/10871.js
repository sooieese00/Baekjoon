const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");

const line1 = input[0].split(" ");
const n = Number(line1[0]);
const x = Number(line1[1]);

const array = input[1].split(" ");
let output = ""

for (let i =0 ; i<n ; i++){
    let currentItem = Number(array[i])
    if(currentItem<x){
        output += currentItem + " ";
    }
}
console.log(output.trim())