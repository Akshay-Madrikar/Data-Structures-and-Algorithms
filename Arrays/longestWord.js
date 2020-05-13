const longestWord = (str) => {
    str = str.trim();
    let arr = str.split(' ')
    arr.sort((a,b) => b.length - a.length); //gives longest word first then smaaler ones

    return arr.shift();
    
}

console.log(longestWord('I love coding')); //coding
console.log(longestWord('We    keep          running     ')); //running