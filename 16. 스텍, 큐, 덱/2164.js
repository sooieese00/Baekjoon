const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const N = Number(input);
    let queue = [];
    for(let i = 1 ; i<=N ; i++){
        queue.push(i);
    }
    let front = 0;
    while(queue.length-front>1){
        front++;
        queue.push(queue[front]);
        front++;
    }
    return queue[front];
}

main();