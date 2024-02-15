//1. 시간 초과로 인하여 실패. 반복횟수의 문제인 것 같아서 반복수를 줄여보려고 함.
// function decimal(num){
//     if(num <= 0) return false
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }

// function solution(n) {
//     var answer = 0;
//     for(let i=2; i<=n; i++){
//         if(decimal(i)){
//             answer++
//         }
//     }
//     return answer
// }


function decimal(num){
    //if(num <= 0) return false, num은 2부터 넘어오므로 쓸모가 없음. 
    if (num <= 3) return true; // 2,3 은 홀수.
    if (num % 2 === 0 || num % 3 === 0) return false; // 2,3 배수는 소수가 아님.
    // i가 5일 경우 25<=num 반복을 돌지 않아 트루. 6,8,9,10... 2,3배수는 일단 false
    // 5에서 6씩 증가하면 홀수.
    for(let i=5; i*i<=num; i += 6){
        if(num%i===0 || num%(i+2)===0){
            return false
        }
    }
    return true
}

function solution(n) {
    var answer = 0;
    for(let i=2; i<=n; i++){
        if(decimal(i)){
            answer++
        }
    }
    return answer
}
