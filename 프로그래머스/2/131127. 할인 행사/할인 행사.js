function solution(want, number, discount) {
  let count = 0;
  
  // discount 배열을 순회하면서 10일간의 기간을 갖는 조각들을 만듦
  for (let i = 0; i < discount.length - 9; i++) {
    // 현재 10일간의 부분 배열을 구함
    const slice = discount.slice(i, i + 10);
	
    // 원하는 제품의 원하는 개수와 일치하는지 확인
    let flag = true;
    for (let j = 0; j < want.length; j++) {
      // 현재 제품에 대한 할인 횟수를 구함
      const discounted  = slice.filter((item) => item === want[j]).length;
      // 할인 횟수가 목표 수량과 일치하지 않으면 flag를 false로 설정하고 반복 중단
      if (discounted  !== number[j]) {
        flag = false;
        break;
      }
    }
    
    // 원하는 제품들이 목표 수량만큼 존재하는 경우 count 증가
    if (flag) count += 1;
  }
  
  return count;
}
