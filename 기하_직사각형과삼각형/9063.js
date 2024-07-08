const fs = require('fs');

function minrectangle(input){
    const N = Number(input[0]);
    
    if(N<=1){
        return 0;
        }else{
            let xList = [];
            let yList = [];

            for(let i = 1 ; i<=N ; i++){
                let line = input[i].split(" ").map(Number);
                xList.push(line[0]);
                yList.push(line[1]);
            }
       
            let hor = Math.max(...xList)-Math.min(...xList);
            let ver = Math.max(...yList)-Math.min(...yList);
            
            return hor*ver;
            }
}

function main() {
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    
    const size = minrectangle(input);

    console.log(size);
}

// main 함수 호출
main();