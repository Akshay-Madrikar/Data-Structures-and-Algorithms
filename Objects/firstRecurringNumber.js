const recur = (arr) => {
    let map = {};

    for(let i=0; i<arr.length; i++) {
        if(map[arr[i]] !== undefined) {
            return arr[i];
        } else {
            map[arr[i]] = i;
            console.log(map)
        }
    }
    return undefined;
}

console.log(recur([1,2,4,1,6,9]))