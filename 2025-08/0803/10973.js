let [n, array] = require('fs').readFileSync('input.txt').toString().split('\n');

n = parseInt(n);
array = array.split(' ').map(Number);
newArray = [...array];

newArray.sort((a, b) => a - b);

if (newArray.join(' ') === array.join(' ')) {
  console.log('-1');
} else {
  let j = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < array[i - 1]) {
      j = i - 1;
      break;
    }
  }

  let max = 0;
  let maxIndex = 0;
  for (let i = j + 1; i < array.length; i++) {
    if (array[j] > array[i]) {
      if (max < array[i]) {
        max = array[i];
        maxIndex = i;
      }
    }
  }

  let temp = array[j];
  array[j] = array[maxIndex];
  array[maxIndex] = temp;

  let sortArr = array.splice(j + 1).sort((a, b) => b - a);

  console.log(array.join(' '), sortArr.join(' '));
}
