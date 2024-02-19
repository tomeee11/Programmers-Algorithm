function solution(n, lost, reserve) {
    var answer = 0;
    //체육복을 공평하게 1씩 나눠준다.
    let arr = new Array(n).fill(1)
    lost.forEach((v)=> arr[v-1]--)
    reserve.forEach((v)=> arr[v-1]++)
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            if(i>0 && arr[i-1] === 2){
                arr[i]++
                arr[i-1]--
            } else if(i< arr.length -1 && arr[i+1] === 2){
                arr[i]++
                arr[i+1]--
            }
        }
    }
    console.log(arr)
    return arr.filter(v => v > 0).length;
}