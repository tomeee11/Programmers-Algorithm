//최대 공약수
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
//최소 공배수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let answer = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}