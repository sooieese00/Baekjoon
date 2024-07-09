const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    
    const result = getsize(input);
    console.log(result);
}

main();

function getsize(input){
    const [a,b,c] = input.split(" ").map(Number).sort((x,y)=>y-x);
    if(a<b+c){
        return a+b+c;
             }else{
                 return 2*(b+c)-1;
             }
}