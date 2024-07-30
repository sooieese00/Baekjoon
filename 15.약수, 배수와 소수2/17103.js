const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

main();

function getResult(input){
    const T = Number(input[0]);
    const cases = input.slice(1).map(Number);
    
    const maxNum = 1000000;
    const primeList = makePrimeList(maxNum);
    
    let output = "";
    for(let i = 0 ; i<T ; i++){
        output += getPartitionNum(cases[i], primeList)+"\n";
    }
    return output.trim();
}

function makePrimeList(maxNum){
    let primeList = Array(maxNum+1).fill(true);
    primeList[0]=primeList[1]=false;
    for(let i = 2 ; i<=maxNum ; i++){
        if(primeList[i]){
            for(let j = i*i ; j<= maxNum ; j+=i){
                primeList[j]=false;
            }
        }
    }return primeList;
}

function getPartitionNum(n, list){
    let cnt = 0;
    for(let i = 0 ; i<=n/2 ; i++){
        if(list[i] && list[n-i]){
            cnt++;
        }
    }return cnt;
}