# 1.Book Store Application

Keep track of the number of available copies.

1.Title
2.Author
3.ISBN
4.numCopies

getAvailability() => "Out of stock"
if 0 available copies, "low stock" if < 10 copies
and "in stock" otherwise

sell(numSold)
restock(cumCopies)

.Use JavaScript classes and functional programming
.Use a getter method

# 1.1 Book Store Application
Inheritance
Create an inheritable application that inherits
from the book store application
that will render the edition of the book
getEdition(){
    Your code here...
}


# 2.Movie Application

Create a movie object that takes 5 arguments
.Title
.Director
.Genre
.Release year
.Rating

The movie content should have a getOverview(), which
logs the following overview of each film.
"<movie>, a<genre> film directed by <director>
was released in <releaseYear>. 
It received a rating of <rating>
"
You can use either 
Class syntax 
class Movie{
    ...your code
}
or 
Function syntax
function Movie(){
    ...your code
}

# 3.ClassRoom Attendance 
De-structuring:
It's an expression that allows us to extract values from objects
and arrays into variables

create a function
.getStudents()
.hasTeachingAssistant

# 4.Coffee Calculations

Array reduce method runs a function once for every
item in an array and returns a single value.
The reduce function is a function that you provide.
That takes an accumulator value and a current value.
The accumulator value is the combined total.
of previous callback function runs

[2,3,1,5]
Price per coffee = $1.25
Sum of coffees = $13.75
You should return the answer in the following format

"The total bill is ${total}"

# 5.Vegetarian Dinner
Array come with many built-in loops and functions
that allow us to manipulate data.
In this project we are going to use the filter method.
The filter method it's a callback function that gets run once
for every item in the array and overturns a new array of items
that pass a certain criteria

create a dish = [
    {
        name: 'Eggplant Parmesan",
        isVegetarian: true,
    },
    {
        name" "fry chicken",
        isVegetarian: false,
    },
    {
        name: "spaghetti",
        isVegetarian: true,
    },
    {
        name: "beef",
        isVegetarian: false,
    }
]

Create an unordered list of all vegetarian dinner options.
You should directly generate the list of items in the DOM

# 6.Ticking Time

Callback functions are functions that get passed to other functions
as an argument and get called at later point in time.
SetTimeout is one javaScript function which requires a callback function.
We pass setTimeout a function and after our function gets executed.

You will create a ticking clock in the document body.
.Ticking clock
.Div with and id of "clock"
.Display the current hours, minutes, and seconds

# 7.Food truck
Set are primitive JavaScript type that allow us ton create a unique set of items.
We can use Set when we have a dataset that contains repeating values,
and we want to remove duplicate instances.


# 8.Train generator
Generators are function that can be exited, and in the later point in time, reentered
while maintaining their context.
Generator functions used to used to be really great in solving problems
with asynchronous programming, but recently, they've kind of been replaced
by javaScript async await

# 9. Dynamic colors
closures are functions that close over their lexical environment
or their scope. This allows us to access an outer function scope
form an inner function.

# 10. API's async call

Fetching API 
