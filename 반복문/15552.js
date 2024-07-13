var fs = require('fs');
var input = fs.readFileSync("dev/stdin").toString().split('\n');

var answer = ""

for (var i=1; i<=parseInt(input[0]); i++){
    var line = input[i].split(" ");
    var a = parseInt(line[0]);
    var b = parseInt(line[1])
    answer += a+b +"\n"
}
console.log(answer.trim())