var fs = require('fs');
var input = fs.readFileSync(0).toString().trim();
var num = parseInt(input);
var sum = 0;

for (var i=1; i<=num ; i++){
    sum = sum+i
}
console.log(sum)