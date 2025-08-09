function solution(N, stages) {
    const counts = Array(N + 1).fill(0);
    for (const s of stages) counts[s]++;

    const result = [];
    let remaining = stages.length;

    for (let i = 1; i <= N; i++) {
        const fail = counts[i];
        const ratio = remaining === 0 ? 0 : fail / remaining;
        result.push({ index: i, ratio });
        remaining -= fail;
    }
    
    return result.sort((a, b) => b.ratio - a.ratio).map(({index, ratio}) => index);
}