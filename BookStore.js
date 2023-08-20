/**
 * Using class syntax
 */
class Book{
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    
    get availability(){
        return this.getAvailability();
    }

    getAvailability(){
        if(this.numCopies === 0){
            return "Out of stock";
        }else if(this.numCopies < 10){
            return 'Low stock';
        }
        return "In stock";
    }

    sell(numCopiesSold = 1){
        this.numCopies -= numCopiesSold;
    }

    stocked(numCopiesStocked = 5){
        this.numCopies += numCopiesStocked;
    }
}

const JsBook = new Book("javaScript", "Eddy Mouity", 123456, 5);
console.log(JsBook.getAvailability());
JsBook.stocked(12);
console.log(JsBook.getAvailability());
JsBook.sell(17);
console.log(JsBook.getAvailability());

/**
 * 
 *Using functional programming(syntax)
 */
function Book(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

Book.prototype.getAvailiblity = function(){
    if(this.numCopies === 0){
        return "Out of stock"
    }else if(this.numCopies < 10){
        return "Low stock"
    }
    return "In stock"
}

Book.prototype.sell = function(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
}

Book.prototype.restock = function(numCopiesStock = 5){
    this.numCopies += numCopiesStock;
}

const JsBook = new Book("JavasScript", "Eddy Mouity", 123456, 5);
console.log(JsBook.getAvailiblity());
JsBook.restock(12);
console.log(JsBook.getAvailiblity());
JsBook.sell(17);
console.log(JsBook.getAvailiblity());




