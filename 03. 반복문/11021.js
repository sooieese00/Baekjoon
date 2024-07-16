var fs = require('fs');
var input = fs.readFileSync(0).toString().split("\n");

var answer = "";

for (var i=1 ; i<=parseInt(input[0]) ; i++){
    line = input[i].toString().split(" ");
    var a = parseInt(line[0])    ;
    var b = parseInt(line[1]);
    var sum = a+b;
    answer += "Case #"+ i + ": " + sum + "\n" ;
}

console.log(answer.trim())