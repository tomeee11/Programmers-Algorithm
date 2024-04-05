function solution(progresses, speeds) {
    var answer = [];
    
    const days = progresses.map((progress, index) =>
                Math.ceil((100 - progress) / speeds[index]));
    let count = 0
    let day = days[0]
    for(let i=0; i<days.length; i++){
        if(day>=days[i]){
            count ++
        }else {
            answer.push(count)
            count =1
            day = days[i];
        }
        
    }
    answer.push(count)
    return answer
}