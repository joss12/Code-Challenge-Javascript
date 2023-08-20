async function getUsers(){
    let people = await fetch("https://randomuser.me/api/?results=5");
    console.log(people)
  }

  getUsers()