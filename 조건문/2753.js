var fs = require('fs');

var input = fs.readFileSync(0).toString().trim()
var year = parseInt(input)

if ((year%4==0 && year%100!=0)||(year%400==0)){
    console.log("1");
}else {console.log("0");}