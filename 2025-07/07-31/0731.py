S = input()
K = input()
new_S = ''

for s in S:
    if '0' <= s <= '9':
        continue
    new_S += s

if new_S.find(K) > -1:
    print(1)
else:
    print(0)