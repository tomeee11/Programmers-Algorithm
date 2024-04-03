function solution(citations) {
/*
정렬 후, 인용된 수와 논문 수가 같다면  H-Index
아니라면,  인용된 수가 논문 수보다 작은 경우
*/
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i+1) {
            return i;
        }
    }
    return citations.length;
}
