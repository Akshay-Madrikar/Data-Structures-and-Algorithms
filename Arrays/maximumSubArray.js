const maximumSubArray = (arr) => { 
    
    if( arr.length === 0 || arr === null ){
        return 0;
    }

    let sum = arr[0];
    let currSum = sum;

    //========= 1 way =====================/
    // for( let i =1; i<arr.length; i++ ){
    //     if(currSum < 0 && currSum <= arr[i]){
    //         currSum = arr[i]
    //     }else {
    //         currSum += arr[i]
    //     }
    //     sum = Math.max(sum,currSum); 
    // }
    // return sum;
    //========================================/

    //=========== 2nd way ====================/
    for( let i =1; i<arr.length; i++ ){
        currSum = Math.max(arr[i], currSum + arr[i])

        if( currSum > sum ){
            sum = currSum;
        }
    }
    return sum;
    //=========================================/

};

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6
console.log(maximumSubArray([10,22,-4,-8,45])) //65