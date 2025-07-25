from collections import deque

def bfs(ripen):
    global ans

    q = deque()
    for r in ripen:
        q.append((r[0], r[1]))

    while q:
        cx, cy = q.popleft()

        for i in range(4):
            nx, ny = cx + dx[i], cy + dy[i]

            if 0 <= nx < N and 0 <= ny < M and tomato[nx][ny] == 0:
                tomato[nx][ny] = tomato[cx][cy] + 1
                q.append((nx, ny))


M, N = map(int, input().split())
tomato = [[0] * M for _ in range(N)]
ripen = []
ans = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
    tomato[i] = list(map(int, input().split()))

for i in range(N):
    for j in range(M):
        if tomato[i][j] == 1:
            ripen.append([i, j])

bfs(ripen)

for i in range(N):
    if 0 in tomato[i]:
        print(-1)
        exit(0)
    ans = max(ans, max(tomato[i]))

print(ans - 1)