const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const iterate = input.length-1;
let result = "";
for (let i=0; i<iterate ; i++){
    let [first, second ]  = input[i].split(" ").map(Number);
    if(first> second && first%second==0){
        console.log("multiple");
    }else if(second>first && second%first==0){
        console.log("factor");
    }else{console.log("neither")}
}