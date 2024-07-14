
const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result =getMax(input);
    console.log(result);
}
main();
    
function getMax(input){
    const [N, M] = input[0].split(" ").map(Number);
    const cardsList = input[1].split(" ").map(Number);
    
    let sumList = [];
    
    for(let i = 0; i<N ; i++){
        for(let j = i+1 ;j<N ; j++ ){
            for (let k = j+1 ; k<N ; k++){
                let sum = cardsList[i]+cardsList[j]+cardsList[k];
                if(sum<=M){sumList.push(sum);}
               
            }
        }
    }
    
    return Math.max(...sumList);
}