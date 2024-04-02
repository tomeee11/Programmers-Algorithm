function solution(want, number, discount) {
    var count = 0;
    /*
    10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 합니다.
    예를 들어, discount.length가 14라면 5번만 돌아야 합니다. (배열의 길이를 넘어가기 때문에)
    */
    for(let i = 0; i <= discount.length - 10; i++) { // 수정된 부분
        // 슬라이스를 통해 discount[i]부터 discount[i+10]까지를 잘라서 배열을 형성합니다.
        const slice = discount.slice(i, i + 10);
        let flag = true;
        for(let j = 0; j < want.length; j++) {
        // slice에 filter를 적용하여 want[j]와 같은 원소의 개수를 구합니다.
            const discounted = slice.filter((v) => v === want[j]).length;
        // discounted와 number[j]를 비교하여 같지 않다면 flag를 false로 설정하고 반복문을                    종료합니다.
            if(discounted !== number[j]) {
                flag = false;
                break;
            }
        }
        // flag가 true인 경우에만 count를 증가시킵니다.
        if(flag) count++;
    }
    return count;
}
