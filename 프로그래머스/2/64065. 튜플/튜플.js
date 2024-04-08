function solution(s) {
    // 문자열에서 숫자들만 추출하여 배열로 변환
    const numbers = s.match(/\d+/g).map(Number);
    // 각 숫자의 개수를 카운트하여 객체로 저장
    const count = {};
    numbers.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    // 숫자의 개수에 따라 정렬하여 결과 튜플 구성
    return Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .map(([num]) => parseInt(num));
}
