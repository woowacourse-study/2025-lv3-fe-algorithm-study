N, K = map(int, input().split())
res = []

for i in range(1, K + 1):
    res.append(int(str(N * i)[::-1]))

print(max(res))