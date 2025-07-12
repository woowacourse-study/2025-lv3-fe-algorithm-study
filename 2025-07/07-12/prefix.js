const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [N, ...words] = input.split("\n");
let result = [];

words.sort((a, b) => a.length - b.length);

for(let i = 0; i < words.length; i++) {
    const word = words[i];
    for(let j = i + 1; j < words.length; j++) {
        if(words[j].startsWith(word)) {
            result.push(words[j]);
            break;
        }
    }
}

console.log(+N - result.length);
