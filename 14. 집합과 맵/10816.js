const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const N = Number(input[0]);
    const hisCards = input[1].split(" ").map(Number);
    const M = Number(input[2]);
    const cardsToCount = input[3].split(" ").map(Number);
    
    let hisCardsMap = {};
    for (let i = 0 ; i<N ; i++){
        let temp = hisCards[i];
        if(hisCardsMap[temp]===undefined){
            hisCardsMap[temp]=1;
        }else{
            hisCardsMap[temp]++;
        }}
        
    
    let resultList = cardsToCount.map(a=>hisCardsMap[a]!==undefined ? hisCardsMap[a]:0);
    return resultList.join(" ");      
}

main();