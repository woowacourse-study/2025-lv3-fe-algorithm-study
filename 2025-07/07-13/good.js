const input = `10
1 2 3 4 5 6 7 8 9 10`

const [[N], numbers] = input.split("\n").map(line => line.split(" ").map(Number));
numbers.sort((a, b) => a - b);
let answer = 0;

const find = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] + arr[right] === target) {
            return true;
        } else if(arr[left] + arr[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

for(let i = 0; i < N; i++) {
    const target = numbers[i];
    const arr = numbers.slice(0, i).concat(numbers.slice(i + 1));
    const result = find(arr, target);
    if(result) {
        answer++;
    }
}

console.log(answer.toString());
