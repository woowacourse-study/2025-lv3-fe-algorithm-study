A, B, C = map(int, input().split())
N = int(input())

result = []

for i in range(N):
    r = 0
    for j in range(3):
        a, b, c = map(int, input().split())
        r += (a * A + b * B + c * C)
        result.append(r)

print(max(result))