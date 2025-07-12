const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solve(input) {
  const [a, b] = input.split(' ').map(Number);
  const sum = a + b;
  const diff = a - b;
  const mul = a * b;
  const div = Math.floor(a / b);
  const mod = a % b;

  console.log(sum);
  console.log(diff);
  console.log(mul);
  console.log(div);
  console.log(mod);
}

solve(input);
