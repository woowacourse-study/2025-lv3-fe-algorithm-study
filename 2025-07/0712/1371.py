import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """5
1 4
4 3 3 2 1
5 2 4 3 2 1
4 4 3 3 1
4 3 2 1 1
4 2 3 2 1
4 4 3 2 1
3 4 3 2
5 4 4 2 3 1
5 4 2 4 1 3"""
)


input = sys.stdin.readlines


count = [0] * 26
for line in input():
    for element in line.strip():
        if element == " ":
            continue
        count[ord(element) - ord("a")] += 1
for i in range(len(count)):
    if count[i] == max(count):
        print(chr(i + ord("a")), end="")
