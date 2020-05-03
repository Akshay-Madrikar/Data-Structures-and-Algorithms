const reverseString = (str) => {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Invalid Input';
    }
    //const revStr = str.split('').reverse().join('');
    const revStr = [...str].reverse().join('')
    return revStr
}

console.log(reverseString('Akshay'));