const [nm, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const array = arr.split(' ').map(Number);

array.sort((a, b) => a - b);

const newArray = [];
let answer = new Set([]);
const visited = new Array(n).fill(false);
dfs();
answer.forEach((item) => {
  console.log(item);
});

function dfs() {
  if (newArray.length === m) {
    answer.add(newArray.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      newArray.push(array[i]);
      dfs();
      visited[i] = false;
      newArray.pop();
    }
  }
}
