N = int(input())
A = sorted(list(map(int, input().split())))
ans = 0

for i in range(N):
    s, e = 0, N -1
    num = A[i]

    while s < e:
        if i == s:
            s += 1
            continue
        if i == e:
            e -= 1
            continue
        if A[s] + A[e] == num:
            ans += 1
            break
        elif A[s] + A[e] < num:
            s += 1
        else:
            e -= 1

print(ans)