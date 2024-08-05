const fs = require('fs');

function main() {
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    
    let output = [];
    for (let i = 0; i < input.length-1; i++) {
        let line = input[i];
        output.push(getResult(line));
    }
    console.log(output.join("\n"));
}

function getResult(line) {
    let stack = [];
    for (let i = 0; i < line.length; i++) {
        let a = line[i];
        if (a == "[" || a=="(") {
            stack.push(a);
        } else if (a == "]") {
            if (stack.length==0 || stack[stack.length-1]!=="[") {
                return "no";
            }else{stack.pop();}
        }else if (a == ")") {
            if (stack.length == 0 || stack[stack.length-1]!=="(") {
                return "no";
            } else {stack.pop();}
        }
    }
    return (stack.length == 0) ? "yes" : "no";
}

main();