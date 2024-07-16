const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    result = getM(input);
    
    console.log(result);
}

main();

function getM(input){
    const N = Number(input);
    for(let i = 1 ; i<N; i++){
        if(i+getdigitsum(i)==N){
            return i;
        }}return 0;
}

function getdigitsum(num){
    return num.toString().split("").reduce((acc, val)=> acc+Number(val),0);
}