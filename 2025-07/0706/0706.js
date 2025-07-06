const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solve(input) {
  const [first, ...rest] = input.split('\n');

  const [N, M] = first.split(' ').map(Number);
  const board = rest.map((row) => row.split(' ').map(Number));

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  function markOuterAir() {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;
    board[0][0] = -1;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && board[nx][ny] <= 0) {
          visited[nx][ny] = true;
          board[nx][ny] = -1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  function findMeltingCheese() {
    const melting = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 1) {
          let count = 0;
          for (let d = 0; d < 4; d++) {
            const ni = i + dx[d];
            const nj = j + dy[d];

            if (ni >= 0 && ni < N && nj >= 0 && nj < M && board[ni][nj] === -1) count++;
          }

          if (count >= 2) melting.push([i, j]);
        }
      }
    }

    return melting;
  }

  function meltCheese(cheeses) {
    for (const [x, y] of cheeses) {
      board[x][y] = 0;
    }
  }

  let time = 0;

  while (true) {
    markOuterAir();

    const melting = findMeltingCheese();
    if (melting.length === 0) break;

    meltCheese(melting);
    time++;

    // 외부 공기 다시 초기화
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === -1) board[i][j] = 0;
      }
    }
  }

  console.log(time);
}

solve(input);
