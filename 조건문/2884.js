var fs = require('fs');
var input = fs.readFileSync(0).toString().split(' ')

var A = parseInt(input[0])
var B = parseInt(input[1])

if (A==0 && B<45){
    A = 23;
    B += 60;
}else if(B<45){
    A-=1;
    B+=60;
}
console.log(A, B-45)
