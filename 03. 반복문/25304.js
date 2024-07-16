var fs = require('fs');
var input = fs.readFileSync(0).toString().split('\n');

var total = parseInt(input[0])
var count = parseInt(input[1])
var sum = 0;

for (var i=2 ; i<=count+1 ; i++){
    line = input[i].toString().split(" ")
    price = parseInt(line[0])
    num = parseInt(line[1])
    linesum = price*num
    sum += linesum 
}

if (total == sum ){
    console.log("Yes");
}else{console.log("No")}
