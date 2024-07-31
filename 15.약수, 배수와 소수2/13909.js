const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getResult(input);
    console.log(result);
}
main();

function getResult(input){
    const T = Number(input);
    const num = Math.sqrt(T);
    return Math.floor(num);
}