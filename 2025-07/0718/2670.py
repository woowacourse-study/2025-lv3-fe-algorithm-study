N = int(input())
arr = [float(input()) for _ in range(N)]

dp = arr[:]
for i in range(1, N):
    dp[i] = max(arr[i], dp[i - 1] * arr[i])

print(f"{max(dp):.3f}")