const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const computerCount = Number(input[0]);
const connectionCount = Number(input[1]);

const graph = new Array(computerCount + 1).fill(null).map(() => []);

for (let i = 2; i < 2 + connectionCount; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(computerCount + 1).fill(false);
let count = 0;

function dfs(node) {
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
}

dfs(1);

console.log(count);
