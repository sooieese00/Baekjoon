const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const N = Number(input[0]);
    const cases = input.slice(1).map(Number);
    let output = "";
    cases.forEach(a=> {
        output += getPrime(a)+"\n";
    })
    return output.trim();
}

function getPrime(t){
    while(!isPrime(t)){
        t++;
        }return t;
}

function isPrime(t){
    if(t<=1)return false;
    if(t==2 || t==3)return true;
    if(t%2==0 ||t%3==0) return false;
    for (let j = 5 ; j*j<=t ; j+=6){
        if(t%j==0 ||t%(j+2)==0)return false;
    }return true;
}

main();