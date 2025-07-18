const [nm, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const array = arr.split(' ').map(Number);
array.sort((a, b) => a - b);

const newArr = [];
const visited = new Array(n).fill(false);
const set = new Set([]);

dfs();
set.forEach((v) => console.log(v));

function dfs(start = 0) {
  if (newArr.length === m) {
    set.add(newArr.join(' '));
    return;
  }

  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      newArr.push(array[i]);
      visited[i] = true;
      dfs(i);
      visited[i] = false;
      newArr.pop();
    }
  }
}
