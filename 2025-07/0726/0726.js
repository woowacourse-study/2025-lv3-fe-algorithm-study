function solution(triangle) {
  const N = triangle.length;
  return calculateSum(triangle[N - 1], triangle, N - 2);
}

function calculateSum(currTriangle, triangle, i) {
  const nextTriangle = triangle[i];
  const subTriangle = [];
  for (let j = 0; j < nextTriangle.length; j++) {
    const first = currTriangle[j] + nextTriangle[j];
    const second = currTriangle[j + 1] + nextTriangle[j];
    subTriangle.push(Math.max(first, second));
  }

  if (i === 0) return subTriangle[0];
  return calculateSum(subTriangle, triangle, i - 1);
}
