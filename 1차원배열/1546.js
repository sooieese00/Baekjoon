const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

const subjectNumber = Number(input[0].trim())
const scoreArray = input[1].trim().split(" ").map(Number)

const max = Math.max(...scoreArray)

let hap = 0;
for(i=0; i<subjectNumber ; i++){
    hap += scoreArray[i]    
}
console.log((hap/max*100)/subjectNumber)
