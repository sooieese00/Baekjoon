var fs = require('fs');
var input = fs.readFileSync(0).toString().trim();

var a = parseInt(input);

for (var i =1; i<10 ; i++){
    console.log(a,"*",i,"=",a*i);
}
    