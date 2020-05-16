const removeDuplicates = (arr) => {
    let result = [];
    result[0] = arr[0];

    for(let i=1; i<=arr.length; i++) {
        if(arr[i] !== arr[i+1]){
            result.push(arr[i])
        }
    }
    return result;
};

console.log(removeDuplicates([1,2,3,1,1,2]));