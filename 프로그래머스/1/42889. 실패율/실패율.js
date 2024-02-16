function solution(N, stages) {
    let answer = [];
    let feildRates = [];
    //1~N번 스테이지 마다 (클리어 못한 사람 수)/(도달한 사람 수)를 인덱스 값과 같이 저장
    for(let i=1; i<=N; i++){
        let total  = stages.filter((v)=> v>=i).length
        let feild  = stages.filter((v)=> v===i).length
    //스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
        let feildRate = feild === 0?0:feild/total
        feildRates.push({i,feildRate})
    }
  
    feildRates.sort((a,b)=> b.feildRate - a.feildRate)
    answer =feildRates.map((v)=>v.i)
    return answer;
}