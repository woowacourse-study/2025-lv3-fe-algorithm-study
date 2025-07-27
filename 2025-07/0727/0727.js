const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numComputers = parseInt(input[0]); // 컴퓨터 수
const numConnections = parseInt(input[1]); // 연결 수

// 인접 리스트 초기화
const graph = Array.from({ length: numComputers + 1 }, () => []);
for (let i = 2; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(numComputers + 1).fill(false);
let count = 0;

function dfs(node) {
  visited[node] = true;
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      count++;
      dfs(neighbor);
    }
  }
}

// 1번 컴퓨터에서 시작
dfs(1);

console.log(count);
