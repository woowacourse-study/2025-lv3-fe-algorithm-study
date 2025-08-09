const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split('\n');
const numbers = stdin[1].split(' ').map(Number);
const what = Number(stdin[2]);

const answer = numbers.filter((num) => num === what).length;

console.log(answer);
