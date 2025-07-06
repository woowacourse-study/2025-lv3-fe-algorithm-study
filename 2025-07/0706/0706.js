const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

const visited = Array.from({ length: N }, () => Array(N).fill(false));

function dfs(x, y) {
  if (x < 0 || y < 0 || x >= N || y >= N || visited[x][y]) return false;
  if (map[x][y] === -1) return true;

  visited[x][y] = true;
  const jump = map[x][y];
  return dfs(x + jump, y) || dfs(x, y + jump);
}

console.log(dfs(0, 0) ? "HaruHaru" : "Hing");
