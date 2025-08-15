function isPlainObject(v) {
  return v !== null && typeof v === 'object' && Object.getPrototypeOf(v) === Object.prototype;
}

function safelySet(object, path, value) {
  const keys = path.split('.');
  const result = { ...object }; // 루트 얕은 복사
  let inCursor = object; // 원본을 읽는 커서
  let outCursor = result; // 결과에 쓰는 커서

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    // 마지막 키면 값만 설정
    if (i === keys.length - 1) {
      outCursor[key] = value;
      break;
    }

    // 다음 단계의 원본 값
    const nextIn = inCursor && isPlainObject(inCursor[key]) ? inCursor[key] : undefined;

    // 다음 단계의 결과 객체: 원본이 Plain object면 얕은 복사, 아니면 새 객체
    const nextOut = nextIn ? { ...nextIn } : {};
    outCursor[key] = nextOut;

    // 커서 전진
    inCursor = nextIn;
    outCursor = nextOut;
  }
  return result;
}

console.log(safelySet({ a: 1 }, 'a.b.c', 2));
// -> 반환 값: {a : {b : {c : 2}}}

console.log(safelySet({ a: 1, b: { 0: 1 } }, 'a.b.c', 2));
// -> 반환 값: {a : {b : {0 : 1, c : 2}}}
