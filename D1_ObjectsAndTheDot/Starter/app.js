var person = new Object();

person["firstname"] = "Alexander";
person["lastname"] = "Sidorov";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "Gagarina";
person.address.city = "Kemerovo";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["city"]);