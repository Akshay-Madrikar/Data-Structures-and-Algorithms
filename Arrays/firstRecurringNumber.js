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

console.log(recur([1,2,3,1,4]));