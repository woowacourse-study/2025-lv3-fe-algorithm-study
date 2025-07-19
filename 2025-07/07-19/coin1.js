const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [first, ...rest] = input.split('\n')
const [n, k] = first.split(" ").map(Number);
const coins = rest.map(Number);

const dp = Array(k + 1).fill(0);

for (let i = 0; i < n; i++) {
  const coin = coins[i];
  for (let j = coin; j <= k; j++) {
    dp[j] += dp[j - coin];
  }
}

console.log(dp[k]);
