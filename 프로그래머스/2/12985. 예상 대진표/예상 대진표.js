function solution(n,a,b) {
    let round = 0;
    //a와 b가 같으면 반복 종료.
    while(a !== b) {
        
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        round++;
    }

    return round;
}
