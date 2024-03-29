function solution(k, tangerine) {
    var answer = new Map()
    
    // 주어진 귤의 크기별 개수를 Map에 저장합니다.
    tangerine.forEach((v) => {
        // 해당 크기의 귤이 이미 Map에 있는 경우, 개수를 증가시킵니다.
        // 없는 경우에는 1로 초기화하여 새로운 항목을 추가합니다.
        answer.set(v, answer.has(v) ? answer.get(v) + 1 : 1)
    })
    // 객체는 정렬이 안되기 때문에, 스프레드 문법을 통해 배열로 변환하여 정렬
    let sortAnswer = [...answer].sort((a, b) => b[1] - a[1])
    
    let sum = 0 // 선택된 귤의 종류 수를 나타내는 변수
    let count = 0 // 선택된 귤의 총 개수를 나타내는 변수
    
    // 정렬된 Map을 순회하면서 k개의 귤을 선택할 때까지 반복합니다.
    for (let [key, value] of sortAnswer) {
        sum++ // 귤의 종류 수를 1 증가시킵니다.
        count += value // 선택된 귤의 개수를 누적합니다.
        
        // 선택된 귤의 개수가 k를 넘어가면 반복을 종료합니다.
        if (count >= k) {
            break
        }
    }
    
    return sum; 
}
