let [test, array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [l, c] = test.split(' ').map(Number);
array = array.split(' ');
array.sort((a, b) => (a > b ? 1 : -1));

const moem = ['a', 'e', 'i', 'o', 'u'];

const newArr = [];
const answer = [];
const visited = Array(c).fill(false);
dfs();
function dfs(k = 0) {
  if (newArr.length === l) {
    // 모음인 것
    const filtered = newArr.filter((a) => moem.includes(a));
    if (filtered.length >= 1 && l - filtered.length >= 2) {
      answer.push(newArr.join(''));
    }
    return;
  }

  for (let i = k; i < c; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    newArr.push(array[i]);
    dfs(i);
    visited[i] = false;
    newArr.pop();
  }
}

console.log(answer.join('\n'));
