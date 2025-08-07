function solution(board) {
  const N = board.length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 조건 1: 행과 열 대칭
      if (board[i][j] !== board[j][i]) return false;

      // 조건 2: 180도 회전 대칭
      if (board[i][j] !== board[N - 1 - i][N - 1 - j]) return false;
    }
  }

  return true;
}
