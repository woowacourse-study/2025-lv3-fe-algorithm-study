import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """5
AAAA ABCD
ABCD AAAA
DARK LOKI
STRONG THANOS
DEADLY ULTIMO"""
)


input = sys.stdin.readline
n = int(input())

for i in range(n):
    결과 = ""
    a, b = input().strip().split(" ")
    for j in range(len(a)):
        앞알파벳 = ord(a[j]) - ord("A")
        뒷알파벳 = ord(b[j]) - ord("A")

        if 앞알파벳 > 뒷알파벳:
            결과 += str(뒷알파벳 + 26 - 앞알파벳) + " "
        else:
            결과 += str(뒷알파벳 - 앞알파벳) + " "

    print("Distances: " + "".join(결과))


