function solution(arr1, arr2) {
  const c1 = arr1[0].length; // 행
  const r1 = arr1.length; // 열

  const c2 = arr2[0].length; //행
  const r2 = arr2.length; //열

  const answer = [];
  for (let i = 0; i < r1; i++) {
    answer.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;

  // 1.(arr1[0][0] * arr2[0][0]) + (arr2[0][0] + arr2[1][0])
  // 2. (arr1[0][0] * arr2[0][1]) + (arr1[0][1] * arr2[1][1])
}
