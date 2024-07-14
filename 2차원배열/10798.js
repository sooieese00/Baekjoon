const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

let maxLength = 0;
for(i=0 ; i<5 ; i++){
    let nowLength = input[i].length;
    if(maxLength<nowLength){
        maxLength = nowLength;
    }
}


const square = input.map((curr)=> (curr+" ".repeat(maxLength-curr.length)).split(""));
let output = "";
for(i=0 ; i<maxLength ; i++){
    for(j=0 ; j<5 ; j++){
       if(square[j][i]!==" "){
            output += square[j][i];
        }
    }
}

console.log(output.trim())