const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const num = Number(input);
    const result = getnum(num);
    
    console.log(result);
}

main();


function getnum(num){
    const iterate = Math.floor(num/5);
    let bagnumber = [];
    for(let i = 0 ; i<=iterate; i++){
        let remainder = num-5*i
        if(remainder%3 !== 0 ){
            continue;
        }else{
            bagnumber.push(remainder/3+i);
        }
    }
    if (bagnumber.length ==0){
        return -1;
    }else{
        return Math.min(...bagnumber);}
}