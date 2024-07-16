const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const num = Number(input[0]);
let count = 0;

for(let i=0; i<num ; i++){
    let word = input[i+1];
    let groupWord = true ; 
    for(let j=0;j<word.length ; j++){
        let letterAfter = word.slice(j+2).split("")
       if(j<=word.length-2 && word[j+1]!==word[j] && letterAfter.includes(word[j])){
           groupWord = false;
           break;
       }
    }if(groupWord){
        count++;
    }
}

console.log(count)