const arr1 = ['1','2','3','4'];
const arr2 = ['10','11','1'];

// const hasCommonItems = (a1, a2) => {
//     for(let i=0; i<a1.length; i++){
//         for( let j=0; j<a2.length; j++ ){
//             if(a1[i] === a2[j]){
//                 return console.log('found');
//             }
//         }
//     }
//     return console.log('nope');
// }

//hasCommonItems(arr1,arr2); // O(a * b)

//      ----- 2nd way----------
// function hasCommonItems (a1,a2)  {
//     let map = {};
//     for( let i=0; i<a1.length; i++ ){
//         if(!map[a1[i]]){
//             const item = a1[i];
//             map[item] = true;
//         }
//     }
    
//     for(let j=0; j<a2.length; j++){
//         if(map[a2[j]]){
//             return console.log('found');
//         }
//     }
//     return console.log('nope');
// }

// hasCommonItems(arr1,arr2); //O(a + b)

// ----------3rd way----------

function hasCommonItems(a1,a2) {
    if (a1.some( item => a2.includes(item) )){
        console.log('found')
    }else {
        console.log('nope')
    }
}

hasCommonItems(arr1,arr2);
