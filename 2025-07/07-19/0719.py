N, K = map(int, input().split())
P = [p for p in range(1, N + 1)]
ans = []

idx = (K - 1) % N
ans.append(P[idx])
P.pop(idx)

while P:
    idx = (idx + (K - 1)) % len(P)
    ans.append(P[idx])
    P.pop(idx)

print(f"<{', '.join(map(str, ans))}>")