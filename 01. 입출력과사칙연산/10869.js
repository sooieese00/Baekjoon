var fs = require('fs');
var input = fs.readFileSync(0).toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));  // 정수 나누기 결과 출력
console.log(a % b);
