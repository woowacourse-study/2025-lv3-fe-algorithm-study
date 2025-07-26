function solution(name, yearning, photo) {
  const mapping = name.reduce((acc, key, index) => {
    acc[key] = yearning[index];
    return acc;
  }, {});

  const answer = photo.map((persons) => {
    return persons.reduce((sum, person) => {
      return sum + (mapping[person] || 0);
    }, 0);
  });

  return answer;
}
