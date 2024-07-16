const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const type = gettype(input);
    console.log(type);
}

main();

function gettype(input){
    const [a,b,c] = input.split("\n").map(Number);
    if(a+b+c !== 180){
        return "Error";
        }else if(a==60 && b==60 && c==60){
            return "Equilateral";
        }else if((a==b && b!==c)||(a==c && c!==b)|| (b==c && c!==a)){
            return "Isosceles";
        }else{
            return "Scalene";
            }
}