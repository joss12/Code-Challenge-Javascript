//Create a promise function to be able to use callback function via promise approach.

const asyncFunc = (callback) =>{
   setTimeout(()=>{
    callback(5);
   }, 3000); 
};

const promisifyAsyncFunction = () =>{
    return new Promise(resolve =>{
        asyncFunc((data)=>{
            resolve(data);
        });
    });
};

promisifyAsyncFunction().then((result)=>{
    console.log(result);
})