const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    console.log(result);
}

main();

function getresult(input){
    let cards = new Set(input[1].split(" ").map(Number));
    let numbers = input[3].split(" ").map(Number);
    numbers = numbers.map(a=>{
        if(cards.has(a)){
            return 1;
        }else{return 0;}
    })
    return numbers.join(" ")
}