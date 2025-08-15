function solution(k, tangerine) {
  var answer = 0;
  const sortedT = tangerine.reduce((acc, tang) => {
    if (!acc[tang]) acc[tang] = 1;
    else acc[tang]++;
    return acc;
  }, {});
  const descOrder = Object.keys(sortedT).sort(
    (a, b) => sortedT[b] - sortedT[a]
  );

  let count = 0;

  for (const tang of descOrder) {
    k -= sortedT[tang];
    count++;
    if (k <= 0) break;
  }

  return count;
}
