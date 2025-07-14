import sys
input = sys.stdin.readline

N = int(input())
nums = []

for _ in range(N):
    nums.append(int(input()))

nums = list(sorted(set(nums)))

print(*nums, sep='\n')