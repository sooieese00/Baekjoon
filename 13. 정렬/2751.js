const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    
    console.log(result);
}

main();

function getresult(input){
    const num = Number(input[0]);
    const sortedList = input.slice(1).map(Number).sort((x,y)=>x-y);
    
    let output = ""
    for(let i = 0 ; i<num; i++){
        output += sortedList[i]+"\n";
    }
    
    return output.trim();
}