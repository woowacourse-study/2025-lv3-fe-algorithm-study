const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function solution(input) {
  const [H, M] = input.trim().split(' ').map(Number);

  let newHour = H;
  let newMinute = M - 45;

  if (newMinute < 0) {
    newHour -= 1;
    newMinute += 60;
  }

  if (newHour < 0) {
    newHour += 24;
  }

  return `${newHour} ${newMinute}`;
}

console.log(solution(input));
