//1
// const makeBodyBlue = () =>{
//     document.body.style.background = '#0f62fe';
// }
// const makeBodyPink = () =>{
//     document.body.style.background = '#ff7eb6';
// }
// const makeBodyGreen = () =>{
//     document.body.style.background = '#42be65';
// }

// document.querySelector("#blue").addEventListener('click', makeBodyBlue);
// document.querySelector("#pink").addEventListener('click', makeBodyPink);
// document.querySelector("#green").addEventListener('click', makeBodyGreen);

//2
// const changeColor = (color) =>{
//     document.body.style.backgroundColor = color;
// }

// document.querySelector('#blue').addEventListener('click', ()=>changeColor ("#0f62fe"))
// document.querySelector('#pink').addEventListener('click', ()=>changeColor ("#ff7eb6"))
// document.querySelector('#green').addEventListener('click', ()=>changeColor ("#42be65"));


/*Closures animations */
const makeItBlue = () =>{
    document.body.style.backgroundColor = "#0f62fe"
}
const makeItPink = () =>{
    document.body.style.backgroundColor = "#ff7eb6"
}
const makeItGreen = () =>{
    document.body.style.backgroundColor = "#42be65"
}

document.querySelector("#blue").addEventListener('click', makeItBlue)
document.querySelector("#pink").addEventListener('click', makeItPink)
document.querySelector("#green").addEventListener('click', makeItGreen)
