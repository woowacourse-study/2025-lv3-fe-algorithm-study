const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const reversedA = input[0].split('').reverse().join('');
const reversedB = input[1].split('').reverse().join('');

const numA = parseInt(reversedA);
const numB = parseInt(reversedB);

console.log(Math.max(numA, numB));
