// --- bind() ---

var person = {
    firstname: 'Alexander',
    lastname: 'Sidorov',
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function (lang1, lang2) {
    console.log('Looged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
};

var logPersonName = logName.bind(person);

//logName(); // get an error, there is no getFullName function in global
logPersonName();
logPersonName('en');


// --- call() ---

logName.call(person, 'en', 'es');


// --- apply() ---
// Like call, but function parementers must be in array:

logName.apply(person, ['en', 'ru']); 


// Function borrowing

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
}

console.log(person.getFullName.apply(person2));

// Function currying

function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(3));

