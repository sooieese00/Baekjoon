const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split('');

let list = [];
for (let i=3; i<=10 ; i++){
    if(i==8 || i==10){
        for (let j=0; j<4; j++){
            list.push(i)
        }}else{
            for(let k=0 ; k<3 ; k++){
                list.push(i)
            }}
        }


let sec = 0;
for(let i=0 ; i<input.length ; i++ ){
    index = input[i].charCodeAt(0)-"A".charCodeAt(0)
    sec += list[index]
}
console.log(sec)