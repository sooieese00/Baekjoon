const fs =require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const word = input[0];
const index = Number(input[1])-1;

console.log(word[index]);