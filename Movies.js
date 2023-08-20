
/**
 * Functional programming
 */


function Movies(title, genre, director, releaseYear, rating){
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movies.prototype.getMovie = function(){
    return `${this.title} a ${this.genre} film directed by ${this.director}
    was released in ${this.releaseYear}  received a rating of ${this.rating}`
}

const spiderman = new Movies("Spiderman", "Action", "Sam Raimi", 2002, 89);
const batman = new Movies("The Dark Knight", "Action", "Christopher Nelan", 2001, 85);

console.log(spiderman)
console.log(spiderman.getMovie());
console.log(batman)
console.log(batman.getMovie());



/**
 * Class programming 
 */

class Movie{
    constructor(title, genre, director, releaseYear, rating){
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview(){
        return `${this.title} a ${this.genre} film director ${this.director}
        was released in ${this.releaseYear}. It received a rating of ${this.rating}`
    }
}

const spiderman = new Movie("Spiderman", "Actions", "Sam Raimi", 2002, 85);
const batman = new Movie("The Dark Knight", "Actions", "Christopher Nelon", 2004, 86);

console.log(spiderman);
console.log(spiderman.getOverview());
console.log(batman);
console.log(batman.getOverview());