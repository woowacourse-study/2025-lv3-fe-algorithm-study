const input = require("fs").readFileSync("dev/stdin").toString().trim();

const [[N], ...map] = input.split("\n").map((line) =>line.split(" ").map(Number));

let success = false;

const dfs = (cur) => {
    const [x, y] = cur;
    if(map[x][y] === 0) return;
    if(map[x][y] === -1) {
        success = true;
        return
    }
    const distance = map[x][y]
    
    if(x + distance < N) dfs([x + distance, y]);
    if(y + distance < N) dfs([x, y + distance]);
}

dfs([0, 0]);
console.log(success ? "HaruHaru" : "Hing");