const rotateArray = (arr, k) => {

//=========== 1 way ======================/
    // let pos, temp = 0;

    // for(let i=0; i<k; i++){
    //     pos = arr[arr.length - 1];
    //     for(let j=0; j<arr.length; j++){
    //         temp =arr[j]
    //         arr[j] = pos;
    //         pos = temp
    //     }
    // }
    // return arr;
//=========================================/

//=========== 2 way ======================/
    k = k % arr.length;

    reverseFunc(arr, 0, arr.length - 1);
    reverseFunc(arr, 0, k - 1);
    reverseFunc(arr, k , arr.length - 1);
    
    function reverseFunc ( array, start , end ) {
       while(start < end){ 
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
       }
    }
    return arr;
//=========================================/
}

console.log(rotateArray([1,2,3,4,5], 2)); //[4,5,1,2,3]
console.log(rotateArray([6,7,8,3,4,5], 3)); //[3,4,5,6,7,8]