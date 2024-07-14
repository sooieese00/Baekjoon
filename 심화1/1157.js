const fs = require('fs');
const input = fs.readFileSync(0,"utf8").toString().trim().split('');
const word = input.map(a=>a.toUpperCase());

let list = new Array(26).fill(0);
for (let i=0 ; i<word.length ; i++){
    let index = word[i].charCodeAt(0)-"A".charCodeAt(0)
    list[index] +=1;
}
const max = Math.max(...list)

let count = 0;
let alphaIndex = 0;
for(let i =0; i<26 ; i++){
    if(list[i]===max)
    {count +=1;
    alphaIndex = i}
}

if(count===1){
    console.log(String.fromCharCode(alphaIndex + "A".charCodeAt(0)))
}else{console.log("?")}
