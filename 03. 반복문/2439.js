var fs = require('fs');
var input = fs.readFileSync(0).toString().trim()

var num = parseInt(input)
var answer = ""

for (i=1 ; i<=num ; i++){
    answer += " ".repeat(num-i) + "*".repeat(i) + "\n"
}
console.log(answer)