const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

main();

function getResult(input){
    const [N, M] = input[0].split(" ").map(Number); 
    const twonum = N+M;//N+M = 집합두개개수
    const setA = new Set(input[1].split(" ").map(Number));
    const setB = new Set(input[2].split(" ").map(Number));
    const combinedSet = new Set([...setA, ...setB]);
    const num = combinedSet.size;//전체개수
    
    return num*2-twonum ;
}