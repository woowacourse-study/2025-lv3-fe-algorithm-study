function solution(s) {
    const remove = (str) => {
        const stack = [];
        for(const char of str) {
            if(stack.length === 0) {
                stack.push(char);
            } else if(stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        };
        
        return stack.join("");
    }
    
    const result = remove(s);

    return result === "" ? 1 : 0;
}