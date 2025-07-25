const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const total = parseInt(input[0]); // 총 금액
const n = parseInt(input[1]); // 항목 개수

let sum = 0;
for (let i = 2; i < 2 + n; i++) {
  const [price, count] = input[i].split(' ').map(Number);
  sum += price * count;
}

if (sum === total) {
  console.log('Yes');
} else {
  console.log('No');
}
