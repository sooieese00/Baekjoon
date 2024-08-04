const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}
main();

function getResult(input){
    const T = Number(input[0]);
    const vpss = input.slice(1);
    
    let output = [];
    for (let i = 0 ; i<T ; i++){
        let vps = vpss[i];
        output.push(judgeVPS(vps));
    }
    return output.join("\n");
}

function judgeVPS(vps){
    let stack=[];
    for(let i = 0 ; i<vps.length ; i++){
        let ps = vps[i];
        if(ps=="("){
            stack.push(ps);
        }else{
            if (stack.length==0){
                return "NO";
            }else{
                stack.pop();
            }}
    }

    if(stack.length==0){
        return "YES";
    }else{return "NO";}
    
}