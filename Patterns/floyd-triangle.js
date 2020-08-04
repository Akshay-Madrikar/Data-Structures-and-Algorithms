// 1 
// 2 3
// 4 5 6
// 7 8 9 10

let str = '';
let number = 1;

for(let i=1; i<=4; i++) {
    for(let j=1; j<=i; j++ ) { 
        str += `${number} `
        number++
     }
    str += '\n'
};

console.log(str);