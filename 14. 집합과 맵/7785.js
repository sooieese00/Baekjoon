/*
객체 이용해서 key값을 사람이름, value값을 상태로 저장해두기
value가 enter인 key들만 뽑아와서 리스트로 저장
역순으로 sort해서 출력
*/

const fs = require('fs');
function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\\n");
    const result = getresult(input);
    console.log(result);
}
main();
function getresult(input){
    const logList = input.slice(1).map(a=>a.split(" "));
    let logMap = {};
    logList.forEach(a=>{
        let name = a[0];
        let status = a[1];
        logMap[name]=status;
    });
    
    //logmap에서 enter값을 가진 key를 뽑아 리스트로 저장
    const enters = Object.keys(logMap).filter(x=>logMap[x]==="enter");
    
     //역순으로 sort, 줄바꿈까지해서 반환
    return enters.sort().reverse().join("\n");   
}