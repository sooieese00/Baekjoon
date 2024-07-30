/*
1. n에서 2n까지를 넘겨주는 함수
2. 소수인지 판별하는 함수
*/

const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const NList = input.slice(0,-1).map(Number);
    const output = NList.map(a=> getmany(a))
    return output.join("\n");
}

function getmany(a){
    let cnt = 0 ;
    for(let i = a+1 ; i<=a*2 ; i++){
        if(isPrime(i))cnt++;
    }return cnt;
}

function isPrime(a){
    if(a<=1)return false;
    if(a==2 || a==3) return true;
    if(a%2==0||a%3==0)return false;
    for(let i = 5 ; i*i<=a; i+=6){
        if(a%i==0 ||a%(i+2)==0)return false;
    }return true;
}
main();