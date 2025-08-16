const testCase = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < testCase.length - 1; i++) {
  const [k, ...array] = testCase[i].split(' ').map(Number);
  const answer = [];
  const newArr = [];
  const visited = Array(array.length).fill(false);
  dfs();

  function dfs(k = 0) {
    if (newArr.length === 6) {
      answer.push(newArr.join(' '));
      return;
    }
    for (let j = k; j < array.length; j++) {
      if (visited[j]) continue;
      newArr.push(array[j]);
      visited[j] = true;
      dfs(j);
      visited[j] = false;
      newArr.pop();
    }
  }
  console.log(answer.join('\n'));
  if (i !== testCase.length - 2) console.log('');
}
