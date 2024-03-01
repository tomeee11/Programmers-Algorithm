

function solution(s) {
    var answer = [0, 0];
    while (s.length > 1) {
        answer[0]++;
        let zeroCount = s.split("1").length - 1;
        answer[1] += s.length - zeroCount;
        s = zeroCount.toString(2);
    }
    return answer;
}
