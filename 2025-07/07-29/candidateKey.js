const getCombination = (arr,n) => {
    let result = []
    if (n===1) return arr.map(v => [v])
    
    arr.forEach((fixed,idx,ori) => {
        const rest = ori.slice(idx+1)
        const combinations = getCombination(rest,n-1)
        const attached = combinations.map(v => [fixed,...v])
        
        result.push(...attached)
    })
    return result
}

function solution(relation) {
    const answer = [];
    const reverseRelation = relation.reduce((result, row) => 
        row.map((_, i) => [...(result[i] || []), row[i]]), []);
    
    for (let i = 1 ; i <= reverseRelation.length; i++) {
        const combinationArr = getCombination(reverseRelation, i);
        for(const combination of combinationArr) {
            const combinationString = combination.reduce((result, row) => 
              row.map((_, i) => [(result[i] || ""),row[i]].join(" "))
            , []).map((row) => row.trim());
            
            const set = new Set(combinationString);
            if(set.size === combinationString.length) {
                const idxArr = combination.map(v => reverseRelation.indexOf(v));
                if(!answer.some(v => v.every(el => idxArr.includes(el)))){
                    answer.push(idxArr)
                }
            }
        }
    }
    return answer.length;
}