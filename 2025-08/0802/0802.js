function solution(n, works) {
  let count = n;

  while (true) {
    const maxNum = Math.max(...works);
    const maxArr = works.filter((num) => num === maxNum);
    works = works.filter((num) => num !== maxNum);
    if (count - maxArr.length < 0) {
      for (let i = 0; i < count; i++) {
        works.push(maxNum - 1);
      }
      for (let i = 0; i < maxArr.length - count; i++) {
        works.push(maxNum);
      }
      break;
    }
    count -= maxArr.length;
    for (let i = 0; i < maxArr.length; i++) {
      works.push(maxNum - 1);
    }
  }

  if (Math.min(...works) < 0) return 0;

  let acc = 0;
  for (const arr of works) {
    acc = acc + Math.pow(arr, 2);
  }
  return acc;
}
