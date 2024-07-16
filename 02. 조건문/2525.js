var fs = require('fs');
var input = fs.readFileSync(0).toString().split("\n")
var time = input[0].split(" ")

var h = parseInt(time[0])
var m = parseInt(time[1])
var more = parseInt(input[1])

var m2= m + more
var m3= Math.floor(m2 / 60)

if (h+m3 >=24){
    h = h+m3-24;
    m2 = m2%60
}else if(h+m3 <24 && m2>=60){
    h = h+m3;
    m2 = m2%60;
}

console.log(h, m2)