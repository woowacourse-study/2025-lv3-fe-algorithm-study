from collections import deque

def bfs(s):
    q = deque()
    q.append(s)
    visited[s] = True

    while q:
        c = q.popleft()

        for com in computer[c]:
            if not visited[com]:
                visited[com] = True
                q.append(com)

N = int(input())
M = int(input())
computer = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)

for _ in range(M):
    c1, c2 = map(int, input().split())
    computer[c1].append(c2)
    computer[c2].append(c1)

bfs(1)

print(visited.count(True) - 1)