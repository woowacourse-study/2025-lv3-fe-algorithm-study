def solution(N, stages):
    result = {}
    total = len(stages)
    
    for i in range(1, N + 1):
        count = stages.count(i)
        
        if total == 0:
            result[i] = 0
        else:
            result[i] = count / total
            
        total -= count
        
    return [k for k, v in sorted(result.items(), key=lambda item: (-item[1], item[0]))]