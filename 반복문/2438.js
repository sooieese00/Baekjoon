var fs = require('fs');
var input = fs.readFileSync(0).toString().trim()
var num = parseInt(input)

for(var i=1; i<=num ; i++){
    for(var j =1 ; j<=i ; j++)
    process.stdout.write("*")
    console.log("")
}