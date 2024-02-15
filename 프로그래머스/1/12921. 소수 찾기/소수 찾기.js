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

    for(let i=5; i*i<=num; i+=6){
        //num의 숫자가 클 경우 반복문이 실행이 된다. 그러므로 반복횟수를 줄일 수 있다.
        if(num%i===0 || num%(i+2)===0){
            return false
        }
    }
    //num의 숫자가 2,3의 배수가 아니고 num의 숫자가 25가 안될 경우 소수이다 
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
