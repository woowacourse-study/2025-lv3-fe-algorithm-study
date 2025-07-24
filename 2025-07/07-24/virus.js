const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [first, second, ...rest] = input.split('\n')
const edges = rest.map((line) => line.split(" ").map(Number));

const graph = Array.from({length: +first + 1}, () => []);
const infections = new Set([]);

for(const [start, end] of edges) {
  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (cur) => {
  infections.add(cur);

  for(const nextNode of graph[cur]) {
    if(infections.has(nextNode)) continue;
    dfs(nextNode);
  }
}

dfs(1)

console.log(infections.size - 1)