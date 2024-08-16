
const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    
    console.log(result);
}

function getResult(input){
    const N = Number(input[0]);
    const lines = input.slice(1);
    let output = [];
    let queue = [];
    let idx = 0;
    
    lines.forEach(a=> {
        const [cmd, val] = a.split(" ")
        if(cmd=="push"){
            queue.push(Number(val));
        }else if (cmd=="pop"){
            if(queue.length==idx){
                output.push(-1)
            }else{
                output.push(queue[idx]);
                idx++;
            }
        }else if (cmd=="size"){
            output.push(queue.length-idx);
        }else if(cmd=="empty"){
            output.push(queue.length==idx? 1:0 )
        }else if (cmd=="front"){
            if(queue.length==idx){
                output.push(-1);
            }else{output.push(queue[idx]);}
        }else if(cmd=="back"){
            if(queue.length==idx){
                output.push(-1);
            }else{output.push(queue[queue.length-1]);}
    }}
    )
    return output.join("\n");
}

main();