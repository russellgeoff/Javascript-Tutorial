// // 8/30
// var suitcase = {
//     shirt: "Hawaiian"
// };

// if (suitcase.hasOwnProperty("shorts")){
//     console.log(suitcase.shorts);
// }
// else{
//     suitcase.shorts = 'test';
//     console.log(suitcase.shorts);
// }

// 9/30

// var nyc = {
//     fullName: "New York City",
//     mayor: "Bill de Blasio",
//     population: 8000000,
//     boroughs: 5
// };

// for (var item in nyc){
//     console.log(item);
// }

// 10/30
// var nyc = {
//     fullName: "New York City",
//     mayor: "Bill de Blasio",
//     population: 8000000,
//     boroughs: 5
// };

// // write a for-in loop to print the value of nyc's properties
// for (var item in nyc){
// 	console.log(nyc[item]);
// }

// 11/30

// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }

// // Let's make bob again, using our constructor
// var bob = new Person("Bob Smith", 30);
// var susan = new Person("Susan Jordan", 35);

// // make your own class here
// function Circle(radius){
//     this.radius = radius;
// }

// 15/30
// function Cat(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// // let's make some cats!
// var cheshire = new Cat("Cheshire Cat", "British Shorthair");
// var gary = new Cat("Gary", "Domestic Shorthair");

// // add a method "meow" to the Cat class that will allow
// // all cats to print "Meow!" to the console
// Cat.prototype.meow = function(){
// 	console.log('Meow!');
// };

// // add code here to make the cats meow!
// cheshire.meow();
// gary.meow();

// 20/30
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin

function Emperor(name){
    this.name = name;
}

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
emperor = new Emperor("ssl");
console.log(emperor.numLegs);