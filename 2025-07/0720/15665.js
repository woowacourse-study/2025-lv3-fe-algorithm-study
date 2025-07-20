const [nm, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const array = arr.split(' ').map(Number);
array.sort((a, b) => a - b);

const newArray = [];
const set = new Set();
const answer = [];

dfs();
set.forEach((a) => answer.push(a));
console.log(answer.join('\n'));

function dfs() {
  if (newArray.length === m) {
    set.add(newArray.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    newArray.push(array[i]);
    dfs();
    newArray.pop();
  }
}
