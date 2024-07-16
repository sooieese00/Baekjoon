const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const num = Number(input);
    const result = get666(num);
    
    console.log(result);
}

main();

function get666(num){
    let num666 =665;
    let cnt666 = 0;
    while(true){
        num666++;
        if(num666.toString().includes("666")){
            cnt666++;
        }
        if(cnt666==num){
            return num666;
        }
    }
    
}