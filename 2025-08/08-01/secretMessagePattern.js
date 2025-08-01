function solution(text) {
    if(text.length < 3 || text.length % 2 === 0) return false;

    const N = text.length;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (text[i][j] !== text[N - 1 - i][N - 1 - j]) return false;

            if (text[i][j] !== text[j][i]) return false;
        }
    }

	return true;
}

console.log(solution(["WOW", "OEO", "WOW"]));
// 결과: true

console.log(solution(["HEL", "LOO", "OLE"]));
// 결과: false

console.log(solution(["SATOR", "AREPO", "TENET", "OPERA", "ROTAS"]));
// 결과: true

console.log(solution(["ABCDE", "FGHIJ", "KLMNO", "PQRST", "UVWXY"]));
// 결과: false