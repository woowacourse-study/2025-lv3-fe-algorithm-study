const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solve(input) {
  const N = Number(input[0]);
  const arr = input.slice(1).map(Number);

  const dp = Array.from({ length: N }, () => 0);
  dp[0] = arr[0];
  for (let i = 1; i < N; i++) {
    dp[i] = Math.max(dp[i - 1] * arr[i], arr[i]);
  }
  console.log(Math.max(...dp).toFixed(3));
}

solve(input);
