const [nm, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const array = arr.split(' ').map(Number);
array.sort((a, b) => a - b);

const newArr = [];
const answer = [];

dfs(0);
console.log(answer.join('\n'));

function dfs(start) {
  console.log(start);
  console.log(newArr);
  if (newArr.length === m) {
    answer.push(newArr.join(' '));
    return;
  }
  for (let i = start; i < n; i++) {
    newArr.push(array[i]);
    dfs(i);
    newArr.pop();
  }
}
