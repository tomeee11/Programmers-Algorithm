function solution(k, dungeons) {
     // 최대로 탐험할 수 있는 던전의 수를 저장할 변수
  let answer = 0;
    // 각 던전의 방문 여부를 저장할 배열
  const visited = new Array(dungeons.length).fill(false);  

  // DFS 함수: 현재 남은 피로도(hp)와 탐험한 던전의 수(L)를 인자로 받음
  function DFS(hp, L) {
    let allVisited = true;  // 모든 던전을 방문했는지 확인하는 플래그
    for (let i = 0; i < dungeons.length; i++) {
      // 아직 방문하지 않았고, 현재 남은 피로도로 던전 탐험 가능한 경우
      if (!visited[i] && dungeons[i][0] <= hp) {
      // 해당 던전을 방문 상태로 변경
        visited[i] = true; 
      // 재귀적으로 다음 던전 탐험을 시도 (피로도 감소, 탐험 던전 수 증가)
        DFS(hp - dungeons[i][1], L + 1);  
        visited[i] = false;  // 백트래킹: 원래 상태로 복구
        allVisited = false;  // 최소 하나의 던전은 아직 방문하지 않았음
      }
    }
    // 더 이상 탐험할 수 없는 경우 현재까지의 최대 던전 수를 갱신
    if (allVisited) {
      answer = Math.max(answer, L);
    }
  }

  DFS(k, 0);  // 초기 피로도와 탐험한 던전 수(0)를 가지고 DFS 시작

  return answer;  // 계산된 최대 던전 수 반환
}