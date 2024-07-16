const fs = require('fs');
const input = fs.readFileSync(0,"utf8").toString().trim().split(" ");

let num = input[0].trim().split("");
const b = Number(input[1]);
const alphaMap ={'A':10, 'B':11, 'C':12,'D':13, 'E':14, 'F':15,'G':16, 'H':17, 'I':18,
          'J':19, 'K':20, 'L':21,'M':22, 'N':23, 'O':24,'P':25, 'Q':26, 'R':27,
          'S':28, 'T':29, 'U':30,'V':31, 'W':32, 'X':33,'Y':34, 'Z':35}

for (i=0;i<num.length;i++){
    let now = num[num.length-1-i]
    if(now.charCodeAt(0)>="A".charCodeAt(0) && now.charCodeAt(0)<="Z".charCodeAt(0)){
        now = alphaMap[now]*(b**i)
    }else{now = Number(now)*(b**i)
}num[num.length-1-i]=now;}

const result = num.reduce((acc, val)=>acc+val)
console.log(result)