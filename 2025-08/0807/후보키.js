const relation = [
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
];

solution(relation);
function solution(relation) {
  var answer = 0;
  const newArr = convertArray(relation);
  const row = newArr.length;
  const column = newArr[0].length;

  let set = new Set();
  let join = [];
  const visit = new Array(row).fill(false);

  dfs();
  function dfs() {
    if (set.size === column) {
      answer++;
      set = new Set();
      join = [];
      return;
    }
    for (let i = 0; i < row; i++) {
      if (!visit[i]) {
        visit[i] = true;
        for (let p = 0; p < column; p++) {
          join[p] = `${join[p]} ${newArr[i][p]}`;
        }
        console.log(join);

        set = new Set(join);
        dfs();
      }
    }
  }
  console.log(answer);
  return answer;
}

function convertArray(array) {
  const newArray = [];
  for (let i = 0; i < array[0].length; i++) {
    newArray.push([]);
    for (let j = 0; j < array.length; j++) {
      newArray[i][j] = array[j][i];
    }
  }
  return newArray;
}
