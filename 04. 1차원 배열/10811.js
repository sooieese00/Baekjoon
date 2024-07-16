const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split("\n");
const line0 = input[0].split(" ").map(Number);

const basketNumber = line0[0];
const actionNumber = line0[1];

//배열 만들고 숫자 집어넣기
const array = [];
for(i=1 ; i<=basketNumber ; i++){
    array.push(i);
}

for(j=1 ; j<=actionNumber ; j++){
    let line = input[j].split(" ").map(Number);
    let startBasket = line[0];
    let lastBasket = line[1];
    
    let subarray = array.slice(startBasket-1, lastBasket).reverse();
    array.splice(startBasket-1, subarray.length, ...subarray)
}

console.log(array.join(" "));