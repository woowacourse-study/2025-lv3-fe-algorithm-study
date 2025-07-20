const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function solve(input) {
  const N = Number(input);
  const MOD = 1000000000;

  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

  // 초기값 설정
  for (let j = 1; j <= 9; j++) {
    dp[1][j] = 1;
  }

  // DP 점화식 적용
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j > 0) dp[i][j] += dp[i - 1][j - 1];
      if (j < 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] %= MOD;
    }
  }

  const result = dp[N].reduce((acc, curr) => (acc + curr) % MOD, 0);
  console.log(result);
}

solve(input);
