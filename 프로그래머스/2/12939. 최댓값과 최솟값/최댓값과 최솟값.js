function solution(s) {
    var answer = '';
    let numArr = s.split(" ").map(Number)
    let max = Math.max(...numArr)
    let min = Math.min(...numArr)
    
    return  min +" "+ max
}