const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result =  gettype(input)
    
    console.log(result)
}
main();

function gettype(input){
    let output = "";
    for(i=0 ; i<input.length-1 ; i++){
        let [a,b,c] = input[i].split(" ").map(Number).sort((x, y) => y - x);
        if(a>=b+c){
            output +="Invalid\n"
        }else if(a==b && b==c){
            output+="Equilateral\n";
        }else if(a!==b && b!==c){
            output += "Scalene\n";
        }else{
            output+= "Isosceles\n";
        }
    }
    return output.trim();
}