const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [n, k] = input.split(' ').map(Number);

let first = 1;
let second = 1;
let result = 1;

const pibonacci = (first, second, n) => {
  if (n <= 2) return second;
  return pibonacci(second, first + second, n - 1);
}

while (result != k) {
  result = pibonacci(first, second, n);
  if(result === k)  break;

  if(result < k) {
    second++;
  } else if(result > k) {
    first++;
    second = first
  }
}

console.log([first, second].join('\n'));