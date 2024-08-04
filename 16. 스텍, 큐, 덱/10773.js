const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

main();

function getResult(input){
    const K = Number(input[0]);
    const nums = input.slice(1).map(Number);
    
    let stack = [];
    for(let i = 0 ; i<K ; i++){
        let num = nums[i];
        if(num==0){
            stack.pop();
        }else{
            stack.push(num);
        }
    }
    
    let sum = stack.reduce((acc, val)=> acc+val, 0);
    return sum;
}