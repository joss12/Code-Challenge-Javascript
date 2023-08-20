//Write an example of fetching data using fetch API.
//This code is base on promise


fetch('http://api.github.com/users/gaearon/repos')
.then(res => res.json())
.then((data)=>{
    console.log("success", data);
})
.catch((error)=>{
    console.log(error);
})
