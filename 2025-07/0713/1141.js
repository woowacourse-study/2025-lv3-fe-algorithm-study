let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
array = array.map((a) => a.trim());
array.sort((a, b) => a.length - b.length);

console.log(array);
const frontArray = [];

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (array[j].startsWith(array[i])) {
      frontArray.push(array[i]);
      break;
    }
  }
}

console.log(`${array.length - frontArray.length}`);
