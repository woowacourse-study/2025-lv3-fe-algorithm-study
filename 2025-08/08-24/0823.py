S = input()
a = ['K', 'O', 'R', 'E', 'A']
ans = 0

idx = 0
for s in S:
    if s == a[idx]:
        ans += 1
        idx = (idx + 1) % 5

print(ans)