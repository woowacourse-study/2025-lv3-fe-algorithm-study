function solution(s) {
  var answer = true;

  let count = 0;
  for (const key of s.split("")) {
    if (key === "(") count++;
    else if (key === ")") count--;
    if (count < 0) return false;
  }

  if (count === 0) return true;
  return false;
}
