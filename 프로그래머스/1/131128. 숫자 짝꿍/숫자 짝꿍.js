function solution(X, Y) {
    const xCounts = new Map();
    const yCounts = new Map();
    
    for (const digit of X) {
        xCounts.set(digit, (xCounts.get(digit) || 0) + 1);
    }
    for (const digit of Y) {
        yCounts.set(digit, (yCounts.get(digit) || 0) + 1);
    }

    let result = '';

    for (const [digit, countX] of xCounts) {
        if (yCounts.has(digit)) {
            const countY = yCounts.get(digit);
            const count = Math.min(countX, countY);
            result += digit.repeat(count);
        }
    }

    if (result === '') {
        return '-1';
    }


    if (result.split('').every(digit => digit === '0')) {
        return '0';
    }

    return result.split("").sort((a,b)=>b-a).join("");
}
