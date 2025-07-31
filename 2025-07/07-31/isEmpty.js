function solution(value) {

    const isEmpty = (object) => {
        if(Array.isArray(object)) {
            return object.length === 0;
        }

        return Object.keys(object).length === 0
    }

    const isTrueObject = (object) => {
        if(isEmpty(object)) return true;

        if(Array.isArray(object)) {
            for(const element of object) {
                if(!isTrueObject(element)) return false;
            }
            return true;
        }
        for(const values of Object.values(object)) {
            if(!isTrueObject(values)) return false;
        }
        return true;
    }

	if(typeof value === 'object') {
        if(value === null) return true;
        if(isTrueObject(value)) return true;
    }
	
	if(value === "" || value === undefined) return true;
	
	return false;
}

console.log(solution(null)) // true
console.log(solution(undefined)) // true
console.log(solution({})) // true
console.log(solution(0)) // false
console.log(solution("")) // true
console.log(solution([{}, {a:[]}])) // true