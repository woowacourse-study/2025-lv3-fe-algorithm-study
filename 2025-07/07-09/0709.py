N = int(input())
ans = 0

P = sorted(list(map(int, input().split())))

for i in range(N):
    ans += sum(P[:i + 1])

print(ans)