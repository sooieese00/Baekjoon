const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const N = Number(input[0]);
    let output = ""
    for(let i = 1 ; i<=N ; i++){
        let [a,b] = input[i].split(" ").map(Number).sort((x,y)=> x-y);
        output += getmulti(a,b)+"\n"
    }return output.trim();
}

function getdivisor(a,b){
    while(a!=0){
        let temp = a;
        a=b%a;
        b=temp;
    }return b
}

function getmulti(a,b){
    return a*b/getdivisor(a,b);
}

main();