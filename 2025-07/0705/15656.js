const [inputs, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = inputs.split(' ').map(Number);
const array = arr.split(' ').map(Number);
array.sort((a, b) => a - b);

const newArray = [];
const answer = [];

function dfs() {
  if (newArray.length === m) {
    answer.push(newArray.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    newArray.push(array[i]);
    dfs();
    newArray.pop();
  }
}

dfs();
console.log(answer.join('\n'));
