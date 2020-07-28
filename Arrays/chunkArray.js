const chunkArray = (arr, size) => {
    const chunked = [];

    for(let element of arr) {
        const lastElement = chunked[chunked.length - 1];

        if( !lastElement || lastElement.length === size ) {
            chunked.push([element])
        } else {
            lastElement.push(element)
        }
    }

    return chunked;
};

console.log(chunkArray([1,2,3,4], 2)) //[ [ 1, 2 ], [ 3, 4 ] ]