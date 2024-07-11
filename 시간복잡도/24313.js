const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n")
    const result = getbigo(input);
    console.log(result);
}

main();

function getbigo(input){
    const [a,b] = input[0].split(" ").map(Number);
    const c = Number(input[1]);
    const d = Number(input[2]);
    
    for(let i = d ; i<=100 ; i++){
        if(a*i+b > c*i){
            return 0;
        }
    }return 1;
}