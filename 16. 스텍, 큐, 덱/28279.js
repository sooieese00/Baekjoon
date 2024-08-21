const fs = require('fs');

function main() {
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getResult(input);
    console.log(result);
}

function getResult(input) {
    const N = Number(input[0]);
    const deque = [];
    let front = 0;
    let back = 0;
    let output = [];

    input.slice(1).forEach(a => {
        let [cmd, val] = a.split(" ");

        switch (cmd) {
            case '1': 
                front--; //-1
                deque[front] = Number(val);
                break;
            case '2': // 정수 X를 덱의 뒤에 넣는다.
                deque[back++] = Number(val);
                break;
            case '3': // 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다.
                output.push(front!==back ? deque[front++] : -1); //0
                break;
            case '4': // 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다.
                output.push(front!==back ? deque[--back] : -1); //0
                break;
            case '5': // 덱에 들어있는 정수의 개수를 출력한다.
                output.push(back-front);
                break;
            case '6': // 덱이 비어있으면 1, 아니면 0을 출력한다.
                output.push(front==back ? 1 : 0);
                break;
            case '7': // 덱에 정수가 있다면 맨 앞의 정수를 출력한다.
                output.push(front!==back ? deque[front] : -1);
                break;
            case '8': // 덱에 정수가 있다면 맨 뒤의 정수를 출력한다.
                output.push(front!==back ? deque[back-1] : -1);
                break;
        }
    });

    return output.join("\n");
}

main();
