
//   async function getUsers(){
//     let people = await fetch("https://randomuser.me/api/?results=5");
//     let data = await people.json();
//     console.log(data);
//     const timeline = document.querySelector("#timeline");
//     data.results.forEach(person =>{
//         let image = document.createElement('img');
//         image.src = person.picture.medium;
//         timeline.appendChild(image);
//     });
//   }

//   getUsers()

// async function getUsers(){
//     let people = await fetch("https://randomuser.me/api/?results=5");
//     let data = await people.json();
//     console.log(data);
//     data.results.forEach(person =>{
//         let image = document.createElement('img');
//         image.src = person.picture.medium;
//         timeline.appendChild(image);
//     })
// }

// getUsers();

const getUsers = async () =>{
    let people = await fetch("https://randomuser.me/api/?results=5");
    let data = await people.json();
    const timeline = document.querySelector('#timeline');
    data.results.forEach(person =>{
        let image = document.createElement('img');
        image.src = person.picture.medium;
        timeline.appendChild(image);
    })
};

getUsers()