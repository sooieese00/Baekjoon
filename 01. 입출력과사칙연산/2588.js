var fs = require('fs');
var input = fs.readFileSync(0).toString().split('\n')
var A = parseInt(input[0])
var B = parseInt(input[1])

var a = Math.floor(B/100)
var b = Math.floor((B-100*a)/10)
var c = B%10

console.log(A*c)
console.log(A*b)
console.log(A*a)
console.log(A*B)