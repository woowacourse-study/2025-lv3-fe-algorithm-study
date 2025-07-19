const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run() {
    const N = Number(input[0]);
    let temp = 1;
    let res = 0;
    for (let i=1; i<=N; i++) {
        number = Number(input[i]);
        temp *= number;
        if (number > temp) temp = number;
        if (temp > res) res = temp;
    }
    console.log(res.toFixed(3));
}

run();


test("run", () => {
    expect(run(8, [1.1, 0.7, 1.3, 0.9, 1.4, 0.8, 0.7, 1.4]).toBe());
});

// 1.1
// 1.1 * 0.7 (비교) 0.7 -> 결정
// 결정된 것 (비교) 
// 비교 1.3
