function solution(record) {
  var answer = [];
  let data = {};
  let answerWithUserId = [];

  for (let i = 0; i < record.length; i++) {
    const [situation, userId, nickname] = record[i].split(' ');

    if (situation !== 'Leave') data[userId] = nickname;

    if (situation === 'Enter') {
      answerWithUserId.push(`${userId}님이 들어왔습니다.`);
    }

    if (situation === 'Leave') {
      answerWithUserId.push(`${userId}님이 나갔습니다.`);
    }
  }

  answer = answerWithUserId.map((a) => {
    const userId = a.split('님')[0];
    return a.replace(userId, data[userId]);
  });

  return answer;
}
