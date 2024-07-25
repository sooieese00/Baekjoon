const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const [a,A] = input[0].split(" ").map(Number);
    const [b,B] = input[1].split(" ").map(Number);
    const tong = (A*B)/getGcd(A, B);
    const newa = (tong/A)*a;
    const newb = (tong/B)*b;
    const div = getGcd(newa+newb, tong);
    return (newa+newb)/div + " " + tong/div
}

function getGcd(a,b){
    while(a!==0){
        let temp = a;
        a=b%a;
        b = temp;
    }return b;
}

main();
