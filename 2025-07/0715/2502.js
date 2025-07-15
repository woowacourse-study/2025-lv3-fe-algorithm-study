const [d, k] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const dp = new Array(d + 1).fill(0).map((_) => new Array(2).fill(0));
// 0 -> x, 1 -> y
dp[1][0] = 1;
dp[2][1] = 1;

for (let i = 3; i <= d; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}
const x = dp[d][0];
const y = dp[d][1];

let xAnswer = 0;
let yAnswer = 0;
for (let i = 1; i <= k / x; i++) {
  if ((k - i * x) % y === 0) {
    xAnswer = i;
    yAnswer = (k - i * x) / y;
    break;
  }
}

console.log(xAnswer + '\n' + yAnswer);
