var fs = require('fs');
var input = fs.readFileSync(0).toString().trim()
var num = parseInt(input)

var count= Math.ceil(num/4)

for (i=0 ; i<count ; i++){
    process.stdout.write("long ")
}
process.stdout.write("int ")