const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

main();

function getResult(input){
    const [N, M] = input[0].split(" ").map(Number);
    const heardSet = new Set(input.slice(1, N+1));
    const seenSet = new Set(input.slice(N+1, N+M+1));
    
    const heardSeen = [...heardSet].filter(a=> seenSet.has(a)).sort();
    
    
    output = heardSeen.length + "\n" + heardSeen.join("\n");
    return output ;
}