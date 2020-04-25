const nemo = ['Akshay'];

const findNemo = ( arr ) => {
    let t0 = performance.now();
    for ( let i in arr ) {
        if(arr[0] === 'Akshay') {console.log('Found'); }
    };
    let t1 = performance.now();
    console.log('Time taken : ' +  (t1-t0));
};

findNemo(nemo);