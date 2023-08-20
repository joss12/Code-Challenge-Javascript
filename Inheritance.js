//1
class Book{
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get Available(){
        return this.getBook()
    }

    getBook(){
        if(this.numCopies === 0){
            return "Out of stock";
        }else if (this.numCopies < 10){
            return "Low stock";
        }
        return "In stock"
    }

    sell(numCopiesSold = 1){
        this.numCopies = numCopiesSold;
    }

    stock(numCopiesStocked){
        this.numCopies = numCopiesStocked;
    }
}


class TechBook extends Book{
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies)
        this.edition = edition;
    }
    getEdition(){
        return `The current edition of ${this.edition}`
    }
}

const JsBook = new TechBook("C++", "Eddy Mouity", 123456, 5, "1.2");
console.log(JsBook.getBook());
console.log(JsBook.getEdition());


//2


function Book(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

Book.prototype.getBook = function(){
    if(this.numCopies === 0){
        return "Out of stock"
    }else if(this.numCopies < 10){
        return "Low stock"
    }
    return "In stock"
}

Book.prototype.sell = function(numCopiesSold = 1){
    this.numCopies -= numCopiesSold
}

Book.prototype.stocked = function(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked
}


class TechBook extends Book{
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }
    getEdition(){
        return `The Edition of this book is ${this.edition}`
    }
}

const JsBook = new TechBook("JavaScript", "Eddy Mouity", 123456, 5, "2.2");
console.log(JsBook.getBook());
JsBook.stocked(12);
console.log(JsBook.getBook());
JsBook.sell(17);
console.log(JsBook.getBook());
console.log(JsBook.getEdition());