const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

//인덱스를 순차적으로 더했을 때 가장 최솟값을 구해야 하네
//3 1 4 3 2
arr.sort((a, b) => a - b);

// 1 2 3 3 4
// index 0은 1 => arr[0]
// Index 1은 1+2 => arr[0] + arr[1]
// index 2는 1+2+3 => arr[0] + arr[1] + arr[2]
let total = 0;
for (let i = 0; i < n; i++) {
  let sum = arr[i];
  for (let j = 0; j < i; j++) {
    sum += arr[j];
  }
  total += sum;
}

console.log(total);
