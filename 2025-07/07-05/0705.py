from collections import deque

def bfs():
    q = deque()
    q.append((0, 0))
    visited[0][0] = True

    while q:
        cx, cy = q.popleft()
        move = m[cx][cy]
        nx, ny = cx + move, cy + move

        if 0 <= nx < N and not visited[nx][cy]:
            visited[nx][cy] = True
            q.append((nx, cy))
        if 0 <= ny < N and not visited[cx][ny]:
            visited[cx][ny] = True
            q.append((cx, ny))

    if visited[N - 1][N - 1]:
        return True
    else:
        return False

N = int(input())
m = [[] * N for _ in range(N)]
visited = [[False] * N for _ in range(N)]

for i in range(N):
    m[i] = list(map(int, input().split()))

if bfs():
    print("HaruHaru")
else:
    print("Hing")