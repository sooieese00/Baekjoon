const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    
    console.log(result);
}

main();

function getresult(input){
    const [N, k] = input[0].split(" ").map(Number);
    const scoreList = input[1].split(" ").map(Number).sort((x, y)=> y-x);
    
    return scoreList[k-1]
}