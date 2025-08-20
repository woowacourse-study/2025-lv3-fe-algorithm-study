function solution(board) {
  var answer = 10000;

  const {row, col} = findRobot(board);

  const boardArr = board.map((b) => b.split(''));
  const visited = Array(board.length)
    .fill(null)
    .map(() => Array(board[0].length).fill(false));

  const dx = [0, 0, -1, 1]; //상, 하, 좌, 우
  const dy = [1, -1, 0, 0];

  let isArrive = false;

  dfs(row, col, 0);

  function dfs(x, y, step) {
    if (isArrive) return;
    if (
      x < board.length &&
      x >= 0 &&
      y >= 0 &&
      y < board[0].length &&
      !visited[x][y]
    ) {
      if (boardArr[x][y] === 'D') step++;

      visited[x][y] = true;
      console.log(x, y, step);

      if (boardArr[x][y] === 'G' && step > 8) {
        isArrive = true;
        answer = Math.min(answer, step);
        visited[x][y] = false;
        return;
      }
      for (let i = 0; i < dx.length; i++) {
        dfs(x + dx[i], y + dy[i], step);
      }
    }
    visited[x][y] = false;
    return;
  }

  console.log(answer);
  return answer;
}

function findRobot(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        return {row: i, col: j};
      }
    }
  }
}
