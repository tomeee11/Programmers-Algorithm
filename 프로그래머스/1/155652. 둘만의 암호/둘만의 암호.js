function solution(strings, skip, index) {
  let answer = '';
  
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz').filter(char => !skip.includes(char));

//   for (const s of strings) {
//     const idx = (alphabet.indexOf(s) + index) % alphabet.length;
//     answer += alphabet[idx];
//   }

  return strings.split("").map((v) => alphabet[(alphabet.indexOf(v) + index) % alphabet.length]).join("");

}
