const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}
main();

function getResult(input){
    const N = Number(input[0]);
    const trees = input.slice(1).map(Number);
    let distances = [];
    for (let i = 0; i < N - 1; i++) {
        distances.push(trees[i + 1] - trees[i]);
    }

    const gcd = getArrayGcd(distances);
    let newdistances = distances.map(a=> a/gcd);
    let hap = getarraysum(newdistances);
    return hap-N+1;
}


function getGcd(a, b){
    while(a!==0){
        let temp = a;
        a=b%a;
        b = temp;
    }return b;
}

function getarraysum(array){
    return array.reduce((acc, val)=> acc+val,0);
}

function getArrayGcd(array){
    if(array.lenghth===0)return 0;
    let gcd = array[0];
    for (let i=1; i<array.length ; i++){
        gcd = getGcd(gcd, array[i]);
        if(gcd===1)break;
    }return gcd;
}