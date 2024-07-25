const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getResult(input);
    console.log(result)
}
main();

function getResult(input){
    const [a,b] = input.split(" ").map(Number).sort((a,b)=>a-b);//작은수, 큰수
    const multi = a*b/getdivisor(a,b);
    return multi;
}

function getdivisor(a,b){
    while(a!=0){
          let temp = a
          a=b%a
          b=temp
          }return b
}