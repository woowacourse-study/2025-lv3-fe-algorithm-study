const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  const [D, K] = input.split(' ').map(Number);

  // dp[i][0] : i번째 날에 준 떡의 개수
  // dp[i][1] : i번째 날에 준 떡의 개수
  const dp = Array.from({ length: D }, () => [0, 0]);
  dp[0] = [1, 0]; // 첫째 날 : A만 줌
  dp[1] = [0, 1]; // 둘째 날 : B만 줌

  for (let i = 2; i < D; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }

  for (let A = 1; A <= K; A++) {
    const B = (K - dp[D - 1][0] * A) / dp[D - 1][1];
    if (B >= A && Number.isInteger(B)) {
      console.log(A);
      console.log(B);
      return;
    }
  }
}

solution(input);
