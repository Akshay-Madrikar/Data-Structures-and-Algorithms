const mergeSortedArrays = (arr1, arr2) => { 
    if(arr1.length === 0){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1;
    }

    let merged = [...arr1,...arr2]
    merged.sort((a,b) => a-b)
    
    return merged;
}

console.log(mergeSortedArrays([4,5,6,7],[0,1,2,3]))