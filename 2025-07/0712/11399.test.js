const run = (_, array) => {
    const times = array.sort((a, b) => a - b);
    return times.reduce((acc, curr) => {
    acc.sum += curr;
    acc.total += acc.sum;
    return acc;
}, { sum: 0, total: 0 }).total;
};

test("run", () => {
    expect(run(5, [3, 1, 4, 3, 2])).toBe(32);
})


test("run", () => {
    expect(run(1, [5])).toBe(5);
})



// 1번부터 N번
// i번 사람이 돈을 인출하는데 걸리는 시간은 pi분
// 3 + 1 + 4 + 3 + 2
// 3 + (3 + 1) + (3 + 1 + 4) + ...

// 1. 0번부터 i번째까지 더하기
// 2. 더한 걸 모두 더하기


// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const n = Number(input[0]);
// const array = input[1].split(" ").map(Number);

// const run = (_, array) => {
//     const times = array.sort((a, b) => a - b);
//     return times.reduce((acc, curr) => {
//     acc.sum += curr;
//     acc.total += acc.sum;
//     return acc;
// }, { sum: 0, total: 0 }).total;
// };

// console.log(run(n, array));
