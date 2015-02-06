var friends = {};

friends.bill = {
	firstName:"Bill",
	lastName:"Gates",
	phone: "7706086361",
	address: ['123 Main Street','San Jose', 'CA', '95124']
};

friends.steve ={
	firstName:"Steve",
	lastName:"Jobs",
	number:"55555555",
	address: ['123 Main Street','San Jose', 'CA', '95124']
};

var list = function(object_lit){
	for (var prop in object_lit){
		console.log(prop);
		// console.log(object_lit[prop]);
	}
};

var search = function(name){
	for (var prop in friends){
		if (friends[prop].firstName === name){
			console.log(friends[prop]);
			return friends[prop];
		}
	}
};