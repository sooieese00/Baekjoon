const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim();
    const result = getxy(input);
    
    console.log(result);
}
main();


function getxy(input){
    let [a,b,c,d,e,f] = input.split(" ").map(Number);
    let x = 0;
    let y = 0;
    if(a==0){
        y = c/b;
        x = (f-e*y)/d;
    }else if (d==0){
        y = f/e;
        x = (c-b*y)/a;
    }else{
        y = (c*d-f*a)/(b*d-e*a);
        x = (c-b*y)/a
    }
    return x.toString()+" "+y.toString();
    
}
