const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const iterate = Number(input[0]);
const line = input[1].trim().split(" ").map(Number);
let result = 0;
for(let i=0 ; i<iterate ; i++){
    let now = line[i];
    let cnt = 0;
    for(let j =1 ; j<=now ; j++){
        if(now%j==0){
            cnt++;
        }
    }if(cnt===2){result++;}
}
console.log(result)