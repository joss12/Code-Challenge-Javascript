//You have to functions which return promises. 
//Map data from users and useStatuses to get array of users with id, name, isActive


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
//Solution 1
// getUsers().then(users=>{
//     getUserStatuses().then(userStatuses=>{
//         const mappedUsers = users.map(user=>{
//             const isActive = userStatuses.find(
//                 (userStatus) => userStatus.id === user.id
//             ).isActive
//             return {...user, isActive};
//         })
//         console.log('mappedUsers', mappedUsers);
//     })
// })

//Solution 2 this is the best version
const mapUsers = (users, userStatuses) =>{
    return users.map(user=>{
        const isActive = userStatuses.find(
        (userStatus) => userStatus.id === user.id
        ).isActive
        return {...user, isActive};
    });
}

// Promise.all([getUsers(), getUserStatuses()])
// .then(([users, userStatuses])=>{
//     const mappedUsers = mapUsers(users, userStatuses);
//         console.log('mappedUsers', mappedUsers);
// })

//This solution is more readable
Promise.all([getUsers(), getUserStatuses()])
.then(([users, userStatuses])=> mapUsers(users, userStatuses))
.then((mappedUsers)=>{
    console.log("mappedUsers", mappedUsers);
})