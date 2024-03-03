
// 1갯수를 비교하는 함수를 생성.
function countOne(number){
    let binary = number.toString(2)
    let count =0
    for(let i=0; i<binary.length; i++){
        if(binary[i] === "1")count++
    }
    return count
}

function solution(n) {
    var count = countOne(n)
    // 반복문의 끝을 몰라서 일단 증가.
    while(true){
    //n 보다 커야하니 먼저 증가. 
        n++
        if(count === countOne(n))
            return n
    }
}