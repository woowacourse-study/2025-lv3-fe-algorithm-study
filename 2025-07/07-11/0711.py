N = int(input())
sentences = []

for _ in range(N):
    sentences.append(input())

for i in range(N):
    for j in range(N):
        if i == j:
            continue
        if sentences[j].find(sentences[i]) == 0:
            sentences[i] = ""

print(N - sentences.count(""))