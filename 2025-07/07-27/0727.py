from sys import stdin
N = int(stdin.readline())

dp = [0] * (21)
dp[0], dp[1] = 1, 1

for i in range(2, N+1):
    # 분열
    dp[i] = dp[i-1]*2
    # 사망
    dp[i] -= dp[i-4] + dp[i-5] if not i % 2 else 0
print(dp[N])