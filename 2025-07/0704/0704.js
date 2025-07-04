function solution(answers) {
  const firstPerson = () => {
    const rule = [1, 2, 3, 4, 5];
    const results = [];
    for (let i = 0; i < 10000; i++) {
      results.push(rule[i % rule.length]);
    }
    return results;
  };

  const secondPerson = () => {
    const rule = [2, 1, 2, 3, 2, 4, 2, 5];
    const results = [];
    for (let i = 0; i < 10000; i++) {
      results.push(rule[i % rule.length]);
    }
    return results;
  };

  const thirdPerson = () => {
    const rule = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const results = [];
    for (let i = 0; i < 10000; i++) {
      results.push(rule[i % rule.length]);
    }
    return results;
  };

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < answers.length; i++) {
    const first = firstPerson();
    const second = secondPerson();
    const third = thirdPerson();

    if (first[i] === answers[i]) count1++;
    if (second[i] === answers[i]) count2++;
    if (third[i] === answers[i]) count3++;
  }
  const maxCount = Math.max(count1, count2, count3);
  const answer = [];
  if (count1 === maxCount) answer.push(1);
  if (count2 === maxCount) answer.push(2);
  if (count3 === maxCount) answer.push(3);

  return answer;
}
