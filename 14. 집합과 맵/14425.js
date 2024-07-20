/*n, m저장한 후에 그만큼 input을 split해서 처음n개는 set, 다음에는 array로 저장
forEach이용해서 has가 true일때마다 ++
*/

const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getresult(input);
    console.log(result);
}
main();

function getresult(input){
    const [N, M] = input[0].split(" ").map(Number);
    const basis = new Set(input.slice(1, N+1));
    const listToTest = input.slice(N+1);
    let cnt = 0;
    
    listToTest.forEach(a=> {
        if(basis.has(a)){
            cnt++
        }
    })
    return cnt;
}