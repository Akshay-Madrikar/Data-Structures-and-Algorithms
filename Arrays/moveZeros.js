const moveZerosToEnd = (arr) => {
    
    if(arr.length === 0 || arr === null) {
        return 0;
    }

//======== 1 way =====================/
    // let pos = 0;
    // for(let i=0; i<arr.length; i++){
    //      if(arr[i] !== 0){
    //          arr[pos] = arr[i];
    //          pos++
    //      }
    // }

    // for(; pos<arr.length; pos++){
    //     arr[pos] = 0;
    // }
    // return arr
//======================================/

//======== 2 way =====================/
    let anchor = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            let temp = arr[anchor];
            arr[anchor] = arr[i];
            arr[i] = temp;

            anchor++
        }
    }
    return arr
//======================================/

}

console.log(moveZerosToEnd([0,1,0,3,12])); //[1, 3, 12, 0, 0]
console.log(moveZerosToEnd([0,5,8,0,20,12])); //[5, 8 ,20, 12, 0, 0]