const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input){
    const [N, M] = input[0].split(" ").map(Number);

    const nameList = input.slice(1, N+1);

    let nameMap = {};
    nameList.forEach((element, index)=> {
        nameMap[element]=index+1;
    })

    const questions = input.slice(N+1);
    let answers = [];

    questions.forEach(a=>{
        //input이 이름일때, nameMap의 key값을 통해 value값인 숫자를 찾아오자
        if(isNaN(a)){
            answers.push(nameMap[a]);
        //input이 숫자일때, nameList의 index값으로 넣어 이름을 찾아오자
        }else{answers.push(nameList[Number(a)-1])}
    })
    
    return answers.join("\n")
}

main();