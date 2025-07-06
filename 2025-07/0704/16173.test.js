const isInBounds = (x, y, n) => {
  return x >= 0 && y >= 0 && x < n && y < n;
};

const nextMoves = (x, y, board, n) => {
  const moves = [];
  const jump = board[x][y];

  // 오른쪽 이동
  if (isInBounds(x, y + jump, n)) {
    moves.push([x, y + jump]);
  }

  // 왼쪽 이동
  if (isInBounds(x + jump, y, n)) {
    moves.push([x + jump, y]);
  }

  return moves;
};

const dfs = (x, y, board, n, visited) => {
  if (!isInBounds(x, y, n)) return false; // 범위 벗어남
  if (visited[x][y]) return false; // 이미 방문
  if (board[x][y] === -1) return true; // 승리 지점 도달

  visited[x][y] = true; // 현재 위치 방문 처리

  const moves = nextMoves(x, y, board, n);

  for (const [nx, ny] of moves) {
    if (dfs(nx, ny, board, n, visited)) {
      return true; // 다음 이동 중 하나라도 성공하면 True
    }
  }

  return false; // 모든 경로가 막혔으면 False
};

const run = (n, board) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  return dfs(0, 0, board, n, visited) ? "HaruHaru" : "Hing";
};

test("run", () => {
  expect(
    run(3, [
      [1, 1, 10],
      [1, 5, 1],
      [2, 2, -1],
    ])
  ).toBe("HaruHaru");

  expect(
    run(3, [
      [2, 2, 1],
      [2, 2, 2],
      [1, 2, -1],
    ])
  ).toBe("Hing");
});

// export default run;
