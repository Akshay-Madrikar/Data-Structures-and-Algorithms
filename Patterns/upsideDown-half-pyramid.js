// * * * * * 
// * * * *
// * * *
// * *
// *

let str = '';

for( let i=5; i>=1; i-- ){
    for(let j=i; j>=1; j--) {
        str += '* '
    }
    str += '\n'
}

console.log(str);