const [[N], ...board] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
console.log([N], board);

const dfs = (x = 0, y = 0) => {
  const dist = board[x][y];

  // 도착한 경우
  if (dist === -1) {
    return true;
  }

  // 0이 적힌 칸
  if (!dist) {
    return false;
  }

  // 오른쪽으로 이동
  if (x + dist < N) {
    const result = dfs(x + dist, y);
    if (result) {
      return true;
    }
  }

  // 아래쪽으로 이동
  if (y + dist < N) {
    const result = dfs(x, y + dist);
    if (result) {
      return true;
    }
  }

  return false;
};

console.log(dfs() ? 'HaruHaru' : 'Hing');
