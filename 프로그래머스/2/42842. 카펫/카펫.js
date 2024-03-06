function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    
    for (let y = 3; y <= Math.sqrt(total); y++) {
        let x = Math.floor(total / y);
        if (x * y === total && (x - 2) * (y - 2) === yellow) {
            answer.push(x, y);
            break
     
        }
    }
    
    return answer;
}
