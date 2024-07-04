const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ");
let [num,b] = input.map(Number);
const alpha =["A","B","C","D","E","F","G","H",
             "I","J","K","L","M","N","O","P","Q",
             "R","S","T","U","V","W","X","Y","Z"]
let result = [];
while(true){
    let element = num%b
    if(element>=10){
        element = alpha[element-10]}
    result.push(element)
    num = Math.floor(num/b)
    if(num==0){break}
}
console.log(result.reverse().join(""))