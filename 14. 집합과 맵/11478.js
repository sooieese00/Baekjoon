const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getResult(input);
    console.log(result);
}
main();

function getResult(input){
    const N = input.length;
    let subSet = new Set();
    for(let i = 0 ; i<N ; i++){
        for(let j = i ; j<N ; j++){
            subSet.add(input.substring(i, j+1));
        }
    }
    return subSet.size;
}