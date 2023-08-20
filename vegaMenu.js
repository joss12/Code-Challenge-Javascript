//Normal function

function vegetarianMenu(menu){
    const menuNode = document.querySelector('#menu');
    const vegganOptions = menu.filter((option)=> option.isVegan === true);

    vegganOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
};

const menu = [
    {
        name: "Chicken parmesan",
        isVegan : false
    },
    {
        name: "Suffed shells",
        isVegan: true
    },
    {
        name: "Spaghetti",
        isVegan: true
    }
]

vegetarianMenu(menu)


//Arrow function
const veganMenu = (menu) =>{
    const menuNode = document.querySelector('#menu');
    const veganOption = menu.filter(option => option.isVegan === true);
    veganOption.forEach(item =>{
        let dish = document.createElement('li');
        dish.textContent = item.name;
        menuNode.appendChild(dish);
    });
};

const menu = [
    {
        name: "Chicken parmesan",
        isVegan : false
    },
    {
        name: "Suffed shells",
        isVegan: true
    },
    {
        name: "Spaghetti",
        isVegan: true
    }
]

veganMenu(menu)