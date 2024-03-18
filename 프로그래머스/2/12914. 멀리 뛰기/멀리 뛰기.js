function solution (n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1; dp[1] = 1;
  
  for(let i = 2; i <= n; i++)
    dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
  
  return dp[n];
}
/*
알고리즘 lv 1 까지는 반복문을 잘 사용하거나 조금의 검색만으로도 해결이 가능 했었는데,
lv 2부터는 사실 혼자서 풀어본 적이 없는 것 같다.
서적을 통해 기본지식을 쌓고 다시 1일 1문제를 도전해봐야겠다.
*/