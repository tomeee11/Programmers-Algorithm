function solution(n, words) {
    let stack = [];
    for (let i = 0; i < words.length; i++) {
        let player =i%n+1
        let turn = Math.floor(i / n) + 1
        if (stack.includes(words[i]) || (i > 0 && words[i - 1].slice(-1) !== words[i][0])) {
            return [player, turn];
        }
        stack.push(words[i]);
    }

    return [0, 0]; 
}
