const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const array = input.slice(2, m + 2).map((arr) => arr.split(" "));

const [start, end] = input
  .slice(m + 2)
  .toString()
  .split(" ")
  .map(Number);

const tree = array.reduce((acc, curr) => {
  const [s, e, c] = curr;
  if (acc[s] !== undefined) acc[s].push([e, c]);
  else acc[s] = [[e, c]];
  return acc;
}, {});

const visit = [start];
let visitIdx = 0;
const dist = {
  [start]: 0,
};

while (true) {
  const startNode = visit[visitIdx++];

  if (Number(startNode) === end) {
    console.log(dist[startNode]);
    break;
  }

  for (const city of tree[startNode] || new Map()) {
    const [e, c] = city;
    const newConst = Number(dist[startNode]) + Number(c);
    if (dist[e] === undefined) {
      dist[e] = newConst;
    } else {
      dist[e] = Math.min(dist[e], newConst);
    }
  }

  const sortedArr = Object.entries(dist)
    .sort((a, b) => a[1] - b[1])
    .filter((arr) => visit.indexOf(Number(arr[0])) === -1);

  visit.push(Number(sortedArr[0][0]));
}
