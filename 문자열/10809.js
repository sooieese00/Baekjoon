const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
let list = [];
for (a=0 ; a<input.length ; a++){
    let ascii = input.charCodeAt(a);
    list.push(ascii);
}

let output = "";
for(i="a".charCodeAt(0) ; i<="z".charCodeAt(0) ; i++){
    if(!list.includes(i)){
               output += "-1"+" ";
    }else{for (j=0 ; j<list.length ; j++){
        if(list[j]==i){
            output += j+" ";
            break;
           }}}}

console.log(output.trim())