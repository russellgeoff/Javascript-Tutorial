// 1/6
// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-777",
//     email: "bob.jones@example.com"
// };

// console.log(bob.firstName);
// console.log(bob.lastName);
// console.log(bob.email);

// 2/6
// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob,mary];

// var printPerson = function (person) {
// 	console.log(person.firstName + " " + person.lastName);
// };

// printPerson(contacts[0]);
// printPerson(contacts[1]);

// 3/6
// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
// }

// var list = function(){
// 	var contactsLength = contacts.length;
// 	for (var i = 0; i < contactsLength; i++) {
// 		printPerson(contacts[i]);
// 	}
// };

// list();

// 5/6
// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };

// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };

// var contacts = [bob, mary];

// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
// }

// function list() {
// 	var contactsLength = contacts.length;
// 	for (var i = 0; i < contactsLength; i++) {
// 		printPerson(contacts[i]);
// 	}
// }

// /*Create a search function
// then call it passing "Jones"*/
// var search = function(lastName){
// 	var contactsLength = contacts.length;
// 	for (var i = 0; i < contactsLength; i++){
// 		if (lastName === contacts[i].lastName){
// 			printPerson(contacts[i]);
// 		}
// 	}
// };

// search("Jones")

// 6/6
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName){
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++){
		if (lastName === contacts[i].lastName){
			printPerson(contacts[i]);
		}
	}
};

var add = function(firstName, lastName, email, phoneNumber){
	contacts.push({
		firstName : firstName,
		lastName : lastName,
		phoneNumber : phoneNumber,
		email : email
	});

};

add("Geoff", "Russell", "770","sss@example.com");
list();