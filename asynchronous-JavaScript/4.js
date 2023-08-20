const asyncFn1 = (callback) =>{
    setTimeout(()=>{
        callback(1);
    }, 3000);
};

const asyncFn2 = (callback) =>{
    setTimeout(()=>{
        callback(2);
    }, 2000);
};

const asyncFn3 = (callback) =>{
    setTimeout(()=>{
        callback(3);
    }, 1000);
};

asyncParallel = (asyncFncs, callback)=>{
    const resultArr = new Array(asyncFncs.length);
    let resultCounter = 0;

    asyncFncs.forEach((asyncFnc, index)=>{
        asyncFnc((value)=>{
            resultArr[index] = value;
            resultCounter ++

            if(resultCounter >= asyncFncs.length){
                callback(resultArr);
            }
        })
    })
}

asyncParallel([asyncFn1, asyncFn2, asyncFn3], (result)=>{
    console.log(result);
});

