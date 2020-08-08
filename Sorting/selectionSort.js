const selectionSort = (arr) => {
    for(let i=0; i<arr.length; i++) {
        let min = i;
        let temp = arr[i];
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([2,5,1,11,9,25,22]))