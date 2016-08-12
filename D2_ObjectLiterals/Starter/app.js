var Alexander = {
    firstname: 'Alexander',
    lastname: 'Sidorov',
    address: {
        street: 'Gagarina',
        city: 'Kemerovo'
    }
};

function greet(person) {
    console.log('Hi, ' + person.firstname);
}

console.log(Alexander);
greet(Alexander);
greet({ firstname: 'Mary', lastname: 'Doe' });