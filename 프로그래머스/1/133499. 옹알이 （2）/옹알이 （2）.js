function solution(babbling) {
    var answer = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((v)=>{
        let modifiedWord = v; 
       
        for(let i=0; i<arr.length; i++){
        
            if(modifiedWord.includes(arr[i].repeat(2))){
                break;
            }
            modifiedWord = modifiedWord.split(arr[i]).join(" ");
        }
        
        if(modifiedWord.split(" ").join("").length === 0){
            answer++;
        }
    });
    
    return answer;
}
