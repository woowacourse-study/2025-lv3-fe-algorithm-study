N = int(input())
P = list(map(int, input().split()))

P.sort()  # 인출 시간 정렬

total_time = 0
current_sum = 0

for time in P:
    current_sum += time  # 지금까지 기다린 시간 + 현재 인출 시간
    total_time += current_sum  # 누적합을 더함

print(total_time)