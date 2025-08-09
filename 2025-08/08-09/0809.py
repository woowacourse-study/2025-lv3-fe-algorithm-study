N = int(input())

current = 1
mul = 0

while current < N:
    mul += 1
    current += 6 * mul

print(mul + 1)