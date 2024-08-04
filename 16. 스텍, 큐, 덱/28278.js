const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

main();

function getResult(input){
    const T = Number(input[0]);
    const cmd = input.slice(1);
    
    let output = "";
    let stack =[];
    
    for(let i = 0 ; i<T ; i++){
        let query = cmd[i];
        let [command, value] = query.split(" ").map(Number);
        
        switch(command){
            case 1: 
                stack.push(value);
                break;
            case 2:
                if(stack.length==0){ 
                    output += -1 +"\n";
                }else {
                    output += stack.pop() +"\n";
                }
                break;
            case 3:
                output += stack.length +"\n";
                break;
            case 4:
                if(stack.length==0){
                    output += 1 +"\n";
                }else{
                    output += 0 +"\n";
                }
                break;
            case 5:
                if(stack.length==0){
                    output += -1 +"\n";
                }else{
                    output +=  stack[stack.length-1] +"\n";
                }
                break;
        }
       
    }
    return output.trim();
}