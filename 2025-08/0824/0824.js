function solution(phone_number) {
  const maxLength = phone_number.length;
  return phone_number
    .split("")
    .map((a, idx) => (maxLength - idx <= 4 ? a : "*"))
    .join("");
}
