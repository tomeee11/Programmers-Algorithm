function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    // cache miss일 경우 실행시간은 5이다.
    if (cacheSize === 0) return cities.length * 5;

    for (let city of cities) {
        city = city.toLowerCase();
        // 캐시에 해당 도시가 있는지 확인
        const index = cache.indexOf(city);
        if (index === -1) {
            // 캐시 미스
            answer += 5;
            // 캐시가 꽉 찬 경우, 가장 오래된 데이터 삭제
            if (cache.length === cacheSize) {
                cache.shift();
            }
        } else {
            // 캐시 히트
            answer += 1;
            /* 해당 도시를 최신으로 업데이트하기 위해
               해당 도시 제거 후, 추가하여 배열의 끝으로 이동*/
            cache.splice(index, 1);
        }
        // 새로운 도시 삽입
        cache.push(city);
    }

    return answer;
}