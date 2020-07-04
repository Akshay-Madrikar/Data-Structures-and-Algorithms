const reverseOnlyString = (x) => {
    const str = x.split('')
    let start = 0; 
    let end = x.length - 1;

    const check = (letter) => (letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z');
    
    while(start < end) {
        if(!check(str[start])){
            start++;
        } else if(!check(str[end])) {
            end--;
        } else {
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }
    }
};

console.log(reverseOnlyString('a@b-c,d:'))