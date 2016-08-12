// JS object literal syntax:
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral);

/*
// JSON:
{
    "firstname": "Mary", // property name in quotes.
    "isAProgrammer": true
}
*/

console.log(JSON.stringify(objectLiteral, null, 2));

var jsonValue = JSON.parse('{ "firstname": "Jane", "isAProgrammer": true }');

console.log(jsonValue);