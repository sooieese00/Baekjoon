const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getResult(input);
    console.log("<"+result+">");
}

function getResult(input){
    let [N, K] = input.split(" ").map(Number);
    let people = [];
    for(let i = 1 ; i<=N ; i++){
        people.push(i);
    }
    let index = 0;
    let output = [];
    while(people.length>0){
        index = (index+ K-1)%people.length;
        output.push(people.splice(index,1)[0]);     
          }
    return output.join(", ")
}
main();