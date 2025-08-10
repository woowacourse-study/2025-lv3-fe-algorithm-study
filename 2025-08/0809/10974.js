const n = Number(require('fs').readFileSync('input.txt').toString().trim());
let array = new Array(n).fill(0).map((_, idx) => idx + 1);

let visited = new Array(n).fill(false);
let newArr = [];

function dfs() {
  if (newArr.length === n) {
    console.log(newArr.join(' '));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited) continue;
    visited[i] = true;
    newArr.push(array[i]);
    dfs();
    visited[i] = false;
    newArr.pop();
  }
}
dfs();

// const reverseArr = [...array].sort((a, b) => b - a);

// let answer = '';
// answer += array.join(' ') + '\n';

// while (array.join(' ') !== reverseArr.join(' ')) {
//   let index = 0;
//   for (let i = n - 1; i >= 0; i--) {
//     if (array[i] > array[i - 1]) {
//       index = i - 1;
//       break;
//     }
//   }

//   let min = 8;
//   let minIndex = 0;
//   for (let i = index + 1; i < n; i++) {
//     if (array[index] < array[i] && array[i] < min) {
//       min = array[i];
//       minIndex = i;
//     }
//   }

//   let temp = array[index];
//   array[index] = array[minIndex];
//   array[minIndex] = temp;

//   let sortArr = array.splice(index + 1).sort((a, b) => a - b);
//   array = [...array, ...sortArr];

//   answer += array.join(' ') + '\n';
// }
// console.log(answer.trim());
