

/* Closures animation 3 */

// const changeColor = (color) =>{
//     return function(){
//         document.body.style.background = color;
//     }
// }

// const bgBlue = changeColor('#0f62fe');
// const bgPink = changeColor('#ff7eb6');
// const bgGreen = changeColor('#42be65');

// document.querySelector("#blue").addEventListener('click', bgBlue);
// document.querySelector("#pink").addEventListener('click', bgPink);
// document.querySelector("#green").addEventListener('click', bgGreen);

const Pbleu = () =>{
    document.body.style.background = '#0f62fe';
}
const Ppink = () =>{
    document.body.style.background = '#ff7eb6';
}
const Pgreen = () =>{
    document.body.style.background = '#42be65';
}

document.querySelector("#blue").addEventListener('click', Pbleu)
document.querySelector("#pink").addEventListener('click', Ppink)
document.querySelector("#green").addEventListener('click', Pgreen)