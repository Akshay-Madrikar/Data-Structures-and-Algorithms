// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let str = '';

for( let i=1; i<=5; i++ ) {
    for( let j=1; j<=i; j++ ) {
        str += `${j} `
    }
    str += '\n';
}

console.log(str)