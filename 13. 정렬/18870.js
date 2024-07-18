const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    console.log(result);
}

main();

function getresult(input){
    const N = Number(input[0]);
    let tempList = input[1].split(" ").map(Number);
    
    let sortedList = [...new Set(tempList)].sort((x,y)=> x-y);
    let output = "";
    for(let i = 0 ; i <N ; i++){
        let val = tempList[i];
        for(let j = 0 ; j<sortedList.length; j++){
            if(sortedList[j]==val){
                output += j +" ";
                break;
            }}}
    return output.trim();
}