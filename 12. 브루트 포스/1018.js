const fs = require('fs');

function main(){
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");
    const result = getMin(input);
    
    console.log(result);
}

main();

function getMin(input){
    const [N, M] = input[0].split(" ").map(Number);
    const board = input.slice(1)
    
    const patterns =
          [['WBWBWBWB', 'BWBWBWBW'],
          ['BWBWBWBW', 'WBWBWBWB']];
    
    let minRepaint = Infinity;
    
    for(let i = 0 ; i<=N-8 ; i++){
        for(let j = 0 ; j <=M-8 ; j++){
            minRepaint = Math.min(minRepaint, 
                                  comparepattern88(board, i, j , patterns[0]),
                                  comparepattern88(board, i, j , patterns[1]))
        }
    }
    return minRepaint;
    
}

function comparepattern88(board, startingrow, startingcol, comparingPattern ){
    let repaint = 0;
    for (let i = 0 ; i<8 ; i++){
        for(let j = 0 ; j<8 ; j++){
            if(board[startingrow+i][startingcol+j] !== comparingPattern[i%2][j]){
                repaint++;
            }
        }
    }
    return repaint;
}
