const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const criteria = new Map([["A+",4.5], ["A0",4.0], ["B+",3.5], 
                         ["B0",3.0], ["C+",2.5], 
                         ["C0",2.0], ["D+",1.5], ["D0",1.0], ["F",0.0]] )
let total = 0;
let totalImportance = 0;
for(let i=0; i<input.length ; i++){
    let line = input[i].split(" ");
    let importance = Number(line[1]); // 3.0, 4.0 등의 값
    let grade = line[2]; //A+, A0 등의 값
    if(grade === "P"){continue;}
    let score = criteria.get(grade); //4.5, 4.0 등의 값
    total += importance*score;
    totalImportance +=importance;
}
console.log((total / totalImportance).toFixed(6));
