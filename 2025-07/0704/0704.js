const [inputs, ...graphInputs] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');

const [n, m, v] = inputs.split(' ').map(Number);
const graph = new Array(n + 1).fill(0).map((_) => new Array(n + 1).fill(0));

let dfsAnswer = [];
let dfsVisited = new Array(n + 1).fill(false);

let bfsAnswer = [];
let bfsVisited = new Array(n + 1).fill(false);

settingGraph();
dfs(v);
console.log(dfsAnswer.join(' '));

bfs(v);
console.log(bfsAnswer.join(' '));

function dfs(v) {
  dfsAnswer.push(v);
  dfsVisited[v] = true;

  for (let i = 1; i <= n; i++) {
    if (graph[v][i] === 1 && !dfsVisited[i]) {
      dfs(i);
      break;
    }
  }
}

function bfs(v) {
  const queue = [];
  bfsAnswer.push(v);
  bfsVisited[v] = true;
  queue.push(v);

  while (queue.length > 0) {
    const top = queue.shift();
    for (let i = 1; i <= n; i++) {
      if (graph[top][i] === 1 && !bfsVisited[i]) {
        bfsAnswer.push(i);
        bfsVisited[i] = true;
        queue.push(i);
      }
    }
  }
}

function settingGraph() {
  for (let i = 0; i < m; i++) {
    const [start, end] = graphInputs[i].trim().split(' ');
    graph[start][end] = 1;
    graph[end][start] = 1;
  }
}
