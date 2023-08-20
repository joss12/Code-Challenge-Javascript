

// const changeColor = (color) =>{
//     return function(){
//         document.body.style.backgroundColor = color
//     }
// }



// const bgColorB = changeColor("#0f62fe")
// const bgColorP = changeColor("#ff7eb6")
// const bgColorG = changeColor("#42be65")

// document.querySelector("#blue").addEventListener('click', bgColorB)
// document.querySelector("#pink").addEventListener('click', bgColorP)
// document.querySelector("#green").addEventListener('click', bgColorG)


/* Closures animation 2 */

const changeColor = (color) =>{
    document.body.style.background = color
}

document.querySelector("#blue").addEventListener('click', ()=>{
    changeColor("#0f62fe")
});
document.querySelector("#pink").addEventListener('click', ()=>{
    changeColor("#ff7eb6")
});
document.querySelector("#green").addEventListener('click', ()=>{
    changeColor("#42be65")
});

