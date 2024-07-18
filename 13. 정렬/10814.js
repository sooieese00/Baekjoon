
const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    
    console.log(result);
}
main();

function getresult(input){
    let tempList = input.slice(1).map(a=>a.split(" "));
    tempList.sort((a, b)=> {
        if(Number(a[0])===Number(b[0])){
            return 0;
        }else{return Number(a[0])-Number(b[0]);}
    })
    return tempList.map(a=>a.join(" ")).join("\n");
}