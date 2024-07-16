const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("");
    const result= getresult(input);
    
    console.log(result);
}

main();


function getresult(input){
    let sortedList = input.map(Number).sort((x,y)=>y-x);
    return sortedList.join("");
}