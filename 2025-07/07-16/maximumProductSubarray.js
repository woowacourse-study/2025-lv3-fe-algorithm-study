const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [N, ...a] = input.split("\n").map(Number);

let max = a[0];
let answer  = a[0];

for (let i = 1; i < N; i++) {
  const cur = a[i];

  const candidates = [cur, cur * max];
  max = Math.max(...candidates);

  if (max > answer) answer = max;
} 

console.log(answer.toFixed(3));