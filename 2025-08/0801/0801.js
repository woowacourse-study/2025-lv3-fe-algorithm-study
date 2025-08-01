function solution(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value === '') return true;
  if (Array.isArray(value)) {
    return value.every((item) => solution(item));
  }
  // value {a:1, b:2}
  if (typeof value === 'object') {
    const keys = Object.keys(value); // [a,b] or []
    return keys.length === 0 || keys.every((key) => solution(value[key]));
  }

  return false;
}
