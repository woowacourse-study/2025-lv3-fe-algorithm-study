const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [[N], numbers] = input.split("\n").map((line) => line.split(" ").map(Number));

numbers.sort((a, b) => a - b);

let sum = 0;
const sums = numbers.map((number) => {
    sum += number;
    return sum;
})

console.log(sums.reduce((acc, cur) => acc + cur, 0).toString());