//--- This will return 1 rather than 2 ------------
const recur = (arr) => {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}
console.log(recur([1,2,2,3,1,4])); //1

// ----- Alternate solution-------------
const recur2 = (arr) => {
    const num = [];
    for(let i=0; i<arr.length; i++) {
        if(!num.includes(arr[i])) {
            num.push(arr[i]);
        } else {
            return arr[i]
        }
    }
    return undefined;
}
console.log(recur2([1,2,2,3,1,4])); //2