function solution(keymap, targets) {
    const arr = {};
    let answer = [];
    
    for (const keyArr of keymap) {
        for (let i = 0; i < keyArr.length; i++) {
            const key = keyArr[i];
            arr[key] = arr[key] ? Math.min(arr[key], i + 1) : i + 1;
        }
    }
    
    for (const targetArr of targets) {
        let count = 0;
        for (let i = 0; i < targetArr.length; i++) {
            const char = targetArr[i];
            if (!arr[char]) {
                count = -1;
                break;
            }
            count += arr[char];
        }
        answer.push(count);
    }
    
    return answer;
}
