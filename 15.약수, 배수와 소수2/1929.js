const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getResult(input);
    console.log(result);
}
main();

function getResult(input){
    const [N, M] = input.split(" ").map(Number);
    let output = ""
    for(let i = N ; i <=M ; i++){
        if(isPrime(i)){output+=i+"\n";} 
    }
    return output.trim();
}

function isPrime(a){
    if(a<=1)return false;
    if(a==2||a==3) return true;
    if( a%2==0 || a%3==0 ) return false;
    for (let j = 5 ; j*j<=a ; j+=6){
        if(a%j==0 || a%(j+2)==0){
            return false;
        }
    }return true;
}