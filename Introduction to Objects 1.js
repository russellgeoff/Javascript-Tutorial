// for (var i=1; i<21; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if (i%3 === 0){
//         console.log("Fizz");
//     }
//     else if (i%5 === 0){
//         console.log("Buzz");
//     }
//     else{
//     	console.log(i);
//     }
// }

// var getReview = function(movie){
// 	switch(movie){
// 		case "Toy Story 2":
// 			return "Great story. Mean prospector.";
// 		case "Finding Nemo":
// 			return "Cool animation, and funny turtles.";
// 		case "The Lion King":
// 			return "Great songs.";
// 		default:
// 			return "I don't know!";
// 	}
// };

// var multiply = function(x, y){
// 	return x*y;
// };

// function Rabbit(adjective) {
//     this.adjective = adjective;
//     this.describeMyself = function() {
//         console.log("I am a " + this.adjective + " rabbit");
//     };
// }

// // now we can easily make all of our rabbits
// rabbit1 = new Rabbit("fluffy");
// rabbit2 = new Rabbit("happy");
// rabbit3 = new Rabbit("sleepy");

// console.log(rabbit1.describeMyself());
// console.log(rabbit2.describeMyself());
// console.log(rabbit3.describeMyself());

// 26/33
// // Our person constructor
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Now we can make an array of people
// var family = new Array();
// family[0] = new Person("alice", 40);
// family[1] = new Person("bob", 42);
// family[2] = new Person("michelle", 8);
// // add the last family member, "timmy", who is 6 years old
// family[3] = new Person("timmy", 6);

// 27/33
// Our Person constructor
// function Person (name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// // Now we can make an array of people
// var family = [new Person("alice", 40),
// 				new Person("bob", 42),
// 				new Person("michelle", 8),
// 				new Person("timmy", 6)];

// // loop through our new array
// for (var person in family){
// 	console.log(family[person].name);
// }

// 28/33
// Our person constructor
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// // We can make a function which takes persons as arguments
// // This one computes the difference in ages between two people
// var ageDifference = function(person1, person2) {
//     return person1.age - person2.age;
// };

// var alice = new Person("Alice", 30);
// var billy = new Person("Billy", 25);

// // get the difference in age between alice and billy using our function
// var diff = ageDifference(alice, billy);

// 29/33
// // Our person constructor
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// // We can make a function which takes persons as arguments
// // This one computes the difference in ages between two people
// var ageDifference = function(person1, person2) {
//     return person1.age - person2.age;
// };

// // Make a new function, olderAge, to return the age of
// // the older of two people
// var olderAge = function(person1, person2){
// 	if (person1.age>person2.age){
// 		return person1.age;
// 	}
// 	else if (person1.age < person2.age){
// 		return person2.age;
// 	}
// 	else {
// 		return person1.age;
// 	}
// };

// // Let's bring back alice and billy to test our new function
// var alice = new Person("Alice", 30);
// var billy = new Person("Billy", 25);

// console.log("The older person is " + olderAge(alice, billy));

// 30/33
// var spencer = {
//   age: 22,
//   country: "United States"
// };

// // make spencer2 here with constructor notation
// var spencer2 = new Object();
// spencer2.age = 22;
// spencer2.country = "United States";

// 31/33
// var snoopy = new Object();
// snoopy.species = "beagle";
// snoopy.age = 10;

// // save Snoopy's age and species into variables
// // use dot notation for snoopy's species
// var species = snoopy.species;

// // use bracket notation for snoopy's age
// var age = snoopy["age"];

// 32/33
// // 3 lines required to make harry_potter
// var harry_potter = new Object();
// harry_potter.pages = 350;
// harry_potter.author = "J.K. Rowling";

// // A custom constructor for book
// function Book (pages, author) {
//     this.pages = pages;
//     this.author = author;
// }

// // Use our new constructor to make the_hobbit in one line
// var the_hobbit = new Book(320,"J.R.R. Tolkien");

// 33/33
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // define a perimeter method here
    this.perimeter = function(){
    	return Math.PI * this.radius * 2;
    };
}