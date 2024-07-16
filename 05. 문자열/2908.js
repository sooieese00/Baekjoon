const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ");

const list = [];
for (i=0; i<2 ; i++){
    word = input[i];
    let newword ="";
    for (j=0; j<word.length ; j++){
        let temp = word[word.length-1-j];
        newword+= temp;
    }list.push(Number(newword));
}
console.log(Math.max(...list));