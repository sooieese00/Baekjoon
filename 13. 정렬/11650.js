const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    
    console.log(result);
}
main();

function getresult(input){
    const N = Number(input[0]);
    let tempList = input.slice(1).map(a=>a.split(" ").map(Number));
    let sortedList = tempList.sort((a, b)=>{
        if (a[0]==b[0]){
            return a[1]-b[1];
        }else{return a[0]-b[0];}
    })
    
    return sortedList.map(a=>a.join(" ")).join("\n");
}