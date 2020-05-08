const containsDuplicate = (arr) => {
   
//============== 1 way ================/
    // for(let i=0; i<arr.length; i++){
    //     for(let j=0; j<i; j++){
    //         if(arr[i] === arr[j]){
    //             return true
    //         }
    //     }
    // }
    // return false
//=====================================/ 

//============== 2 way ================/
    let numbers = new Set();

    for( let num of arr ){
        if(!numbers.has(num)){
            numbers.add(num);
        } else{
            return true;
        }
    }
    return false;
//=====================================/
}

console.log(containsDuplicate([1,2,3,2])); //true
console.log(containsDuplicate([5,6,7,8])); //false