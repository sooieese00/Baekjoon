const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ")
const N = Number(input[0]);
const K = Number(input[1]);

let list = [];
for(let i=1 ; i<=N ; i++){
    if(N%i==0){
        list.push(i);
    }
}

if(list.length<K){
    console.log(0);
}else{
    console.log(list[K-1]);
}