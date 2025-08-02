let [n, array] = require('fs').readFileSync('input.txt').toString().split('\n');

n = parseInt(n);
array = array.split(' ').map(Number);
newArray = [...array];

const reverseArray = newArray.sort((a, b) => b - a);

if (reverseArray.join(' ') === array.join(' ')) {
  console.log('-1');
} else {
  let j = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > array[i - 1]) {
      j = i - 1;
      break;
    }
  }

  let min = 10000;
  let minIndex = 0;
  for (let i = j + 1; i < array.length; i++) {
    if (array[j] < array[i]) {
      if (min > array[i]) {
        min = array[i];
        minIndex = i;
      }
    }
  }
  let temp = array[j];
  array[j] = array[minIndex];
  array[minIndex] = temp;

  let sortArr = array.splice(j + 1).sort((a, b) => a - b);

  console.log(array.join(' '), sortArr.join(' '));
}
