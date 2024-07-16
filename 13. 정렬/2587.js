const fs = require ('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().split("\n").map(Number);
    const result = getresult(input);
    
    console.log(result);
}

main();

function getresult(input){
    let sum = 0;
    for(i=0 ; i<5 ; i++){
        sum += input[i]
    }
    
    let average = sum/5;
    let mid = input.sort((a, b)=>a-b)[3];
    
    return average+"\n"+mid
      
}