var fs = require('fs');

var input = fs.readFileSync(0).toString().split("\n")
var i = 0;
var answer = "";

while(true){
    if(input[i].trim() === ""){
        break;
    }
    var line  = input[i].split(" ");
    var a = parseInt(line[0]);
    var b = parseInt(line[1]);
    var sum = a+b;
    answer += sum + "\n";
    i++;
}
console.log(answer.trim())