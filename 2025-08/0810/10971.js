let [n, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = Number(n);
arr = arr.map((a) => a.split(' ').map(Number));

let minCost = 1000000 * 10;
let cities = [];
let visit = new Array(n).fill(false);

dfs();

function dfs() {
  if (cities.length === n) {
    let cost = 0;
    for (let i = 0; i < n - 1; i++) {
      if (arr[cities[i]][cities[i + 1]] === 0) return;
      cost += arr[cities[i]][cities[i + 1]];
    }
    if (arr[cities[n - 1]][cities[0]] === 0) return;
    cost += arr[cities[n - 1]][cities[0]];
    minCost = Math.min(minCost, cost);

    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      visit[i] = true;
      cities.push(i);
      dfs();
      visit[i] = false;
      cities.pop();
    }
  }
}

console.log(minCost);
