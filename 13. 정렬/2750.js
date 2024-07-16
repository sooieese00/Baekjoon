const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getsorted(input) ;
    
    console.log(result);

}
main();

function getsorted(input){
    const iterate = Number(input[0]);
    let sortList = input.slice(1).sort((a, b)=>a-b);
    let output = ""
    for (let i = 0 ; i<sortList.length; i++){
        output += sortList[i]+"\n"
    }
    return output.trim();
    
}