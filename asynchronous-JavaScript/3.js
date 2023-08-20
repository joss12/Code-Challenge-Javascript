// Write a asynchronous function which executes callback after finishing it's asynchronous task
//What problem callback solve?
const asyncFn = (callback) =>{
    setTimeout(()=>{
        callback("Done!");
    }, 2000);
};
asyncFn((message)=>{
    console.log("Callback ", message)
});