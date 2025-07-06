const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const board = input.slice(1).map((line) => line.split(" ").map(Number));

console.log(run(n, board));
