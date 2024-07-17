const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    console.log(result);
}
main();

function getresult(input){
    const N = Number(input[0]);
    let words = input.slice(1);
    
    words = [...new Set(words)];
    
    words = words.sort((a, b)=>{
        if(a.length==b.length){
            return a.localeCompare(b);
        }else{return a.length-b.length;}
    });
    
    return words.join("\n");
    
}