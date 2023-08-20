//Food tuck





// const foodTruck = (menus) =>{
//     let flatMenu = menus.flat();

//     let combineMenu = new Set();
//     flatMenu.forEach(item =>{
//         combineMenu.add(item)
//     });

//     const menuNode = document.querySelector('#combined-menu');
//     for(let item of combineMenu){
//         let foodNode = document.createElement('li');
//         foodNode.innerText = item;
//         menuNode.appendChild(foodNode);
//     }
// }

// foodTruck([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);

// const foodTruck = (menus) =>{
//     let flatMenu = menus.flat()

//         let combineMenu = new Set()
//         flatMenu.forEach(item=>{
//             combineMenu.add(item);
//         });

//         const menuNode = document.querySelector('#combined-menu');
//         for(let item of combineMenu){
//             let foodNode = document.createElement('li');
//             foodNode.innerText = item;
//             menuNode.appendChild(foodNode);
//         }
// }

// foodTruck([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);


function foodTruck(menus){
    let flatMenu = menus.flat();

    let combineMenu = new Set();
    flatMenu.forEach(item=>{
        combineMenu.add(item)
    });

    const menuNode = document.querySelector('#combined-menu');
    for(let item of combineMenu){
        foodNode = document.createElement('li');
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);
    }
}
foodTruck([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);
