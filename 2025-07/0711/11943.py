import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """1 2
3 4"""
)

a
input = sys.stdin.readline

a, b = map(int, input().split(" "))
c, d = map(int, input().split(" "))

print(min(b + c, a + d))
