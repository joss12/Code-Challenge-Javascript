
//You have to functions which return promises. 
//Map data from users and useStatuses to get array of users with id, name, isActive
//Rewrite previous task in async await

const users = [
    {
        id: 1,
        name: "Jack"
    },
    {
        id: 1,
        name: "Eddy"
    },
    {
        id: 1,
        name: "Grace"
    },
];

const userStatuses = [
    {
        id:1,
        isActive:true
    },
    {
        id:2,
        isActive:false
    },
    {
        id:3,
        isActive:true
    },
]


const getUsers = () =>{
    return new Promise((resolve)=>{
        resolve(users);
    });
}

const getUserStatuses = () =>{
    return new Promise((resolve)=>{
        resolve(userStatuses);
    })
}

const getMappedUsers = async () =>{
    try {
        const users = await getUsers();
    const userStatuses = await getUserStatuses();

    const mappedUsers = users.map((user)=>{
        const isActive = userStatuses.find(
            (userStatus) => userStatus.id === user.id
        ).isActive;
        return {...user, isActive};
    });
    console.log("mappedUsers", mappedUsers)
    } catch (error) {
        console.log(error.message);
    }
};
getMappedUsers();