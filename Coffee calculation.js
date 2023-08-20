
//Normal function
function coffeeDate(coffeeArray){
    let coffeeSum = coffeeArray.reduce(
        (totalCoffees, numCoffees) =>(totalCoffees + numCoffees)
    );
    return `The total bill is ${coffeeSum * 1.25}`;
}
console.log(coffeeDate([2,5,7,1,4]));


//Arrow function
const coffeeDate = (coffeeArray) =>{
    let coffeeSum = coffeeArray.reduce(
        (totalCoffees, numCoffees) =>(
            totalCoffees + numCoffees
            )
        );
        return `The total bill is ${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2,5,7,1,4]));


//final
const cDate = (cArr)=>{
    let cSum = cArr.reduce((
        ctotal, numC) => (
        ctotal + numC
        )
    );
    return `The bill is ${cSum * 1.25}`;
}
console.log(cDate([2, 5, 7, 4, 1]))