function solution(n) {
    const mod = 1234567;
    //0번과 1번 인덱스는 고정
    let fb = [0, 1];
    //2번 인덱스부터 진행
    for (let i = 2; i <= n; i++) {
        fb[i] = (fb[i - 1] + fb[i - 2]) % mod;
    }

    return fb[n];
}
