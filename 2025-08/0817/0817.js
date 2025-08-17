function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cam = -Infinity; // 마지막 카메라 위치
  let ans = 0;

  for (const [start, end] of routes) {
    if (cam < start) {
      cam = end;
      ans++;
    }
  }

  return ans;
}
