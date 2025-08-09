function solution(A, B) {
  var answer = 0;

  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortA.length; i++) {
    answer += sortA[i] * sortB[i];
  }

  return answer;
}
