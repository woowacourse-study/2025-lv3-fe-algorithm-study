from itertools import combinations

def solution(relation):
    answer = []
    N = len(relation[0])
    l = len(relation)
    arr = [i for i in range(N)]
            
    for i in range(1, N + 1):
        lst = list(map(list, combinations(arr, i)))
        
        for ls in lst:
            key = set(ls)

            # 유일성
            unique = {tuple(row[c] for c in ls) for row in relation}
            if len(unique) != l:
                continue

            # 최소성
            if any(k.issubset(key) for k in answer):
                continue

            answer.append(key)
    
    return len(answer)