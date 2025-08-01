function solution(operations) {
  let queue = [];
  for (const op of operations) {
    const [keyword, number] = op.split(" ");
    if (keyword === "I") {
      queue.push(Number(number));
    } else if (keyword === "D" && number === "1") {
      queue = queue.sort((a, b) => b - a);
      queue.shift();
    } else if (keyword === "D" && number === "-1") {
      queue = queue.sort((a, b) => a - b);
      queue.shift();
    }
  }

  if (queue.length === 0) return [0, 0];
  return [Math.max(...queue), Math.min(...queue)];
}
