function solution(number) {
    let answer = 0;
    const combination = (list, num) => {        
        const helper = (sum, rest, count) => {
            if(count === num) {
                if(sum === 0) answer++;
                return;
            }
            
            rest.forEach((value, index) => {
                const temp = rest.slice(index + 1);
                helper(sum + value, temp, count + 1);
            })
        }
        
        helper(0, list, 0);
    }
    
    combination(number, 3);
    
    return answer;
}