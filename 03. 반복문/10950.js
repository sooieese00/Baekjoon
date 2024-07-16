var fs = require('fs');
var input = fs.readFileSync(0).toString().split('\n')

var num = parseInt(input[0])

for (var i=1 ; i<=num; i++){
    line = (input[i]).toString().split(" ")
    a = parseInt(line[0])
    b = parseInt(line[1])
    console.log(a+b)
}

