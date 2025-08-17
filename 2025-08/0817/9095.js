const [t, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < t; i++) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let j = 4; j <= array[i]; j++) {
    dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
  }
  console.log(dp[array[i]]);
}
