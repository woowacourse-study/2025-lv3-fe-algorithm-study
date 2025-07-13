const run = (n, array) => {
    const list = array.sort();
    return list.map((curr, index) => {
        const next = list[index+1];
        if(!next) return true;
        return !(next.slice(0, curr.length).includes(curr));
    }).filter((number) => number).length;
}

test("run", () => {
    expect(run(6, ["hello", "hi", "h", "run", "rerun", "running"])).toBe(4);
    expect(run(6, ["a", "b", "cba", "cbc", "cbb", "ccc"])).toBe(6);
    expect(run(6, ["a", "ab", "abc", "abcd", "abcde", "abcdef"])).toBe(1);
    expect(run(3, ["topcoder", "topcoder", "topcoding"])).toBe(2);
});


// hello
// hi
// h
// run
// rerun
// running

// h <-> hi, hello
// run <-> running
// hi, hello, rerun, run

// 겹치는 문자 확인 및 삭제


// const [n, ...array] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


// const run = (n, array) => {
//     const list = array.sort();
//     return list.map((curr, index) => {
//         const next = list[index+1];
//         if(!next) return true;
//         return !(next.slice(0, curr.length).includes(curr));
//     }).filter((number) => number).length;
// }

// console.log(run(n, array));
