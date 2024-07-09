var fs = require('fs');
var input = fs.readFileSync(0).toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

if (a==b && b==c){
    var prize=10000+a*1000;
} else if ((a==b && b!=c) || (a==c && b!=c) ){
    var prize = 1000+a*100;
} else if (b==c && a!=c){
    var prize = 1000+b*100;
}else{if(a>b && a>c){
    var max=a;
    prize = max*100;
}else if (b>c && b>a){
    var max = b;
    var prize = max*100;
}else{var max = c;
      var prize = max*100;
}}

console.log(prize)