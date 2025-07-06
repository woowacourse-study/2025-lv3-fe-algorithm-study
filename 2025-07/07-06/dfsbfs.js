const input = require('fs').readFileSync("/dev/stdin").toString().trim();

const [[N, M, V], ...edges] = input.split("\n").map((line) => line.split(" ").map(Number));

const graph = Array.from({length: N + 1}, () => []);
edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
})

for(let i = 1; i<= N; i++) {
    graph[i].sort((a, b) => a - b);
}

const dfsVisited = Array(N + 1).fill(false);
const dfsResult = [];

const dfs = (node) => {
    dfsVisited[node] = true;
    dfsResult.push(node);
    for(const next of graph[node]) {
        if(!dfsVisited[next]) {
            dfs(next);
        }
    }
}

const bfsVisited = Array(N + 1).fill(false);
const bfsResult = [];

const bfs = (start) => {
    const queue = [start];
    bfsVisited[start] = true;
    
    while (queue.length > 0) {
        const node = queue.shift();
        bfsResult.push(node);

        for (const next of graph[node]) {
            if (!bfsVisited[next]) {
            bfsVisited[next] = true;
            queue.push(next);
        }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "))
console.log(bfsResult.join(" "))