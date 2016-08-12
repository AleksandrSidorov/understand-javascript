// function statement
// 
function greet(name) {
    console.log("Hello, " + name);
}
greet("Alexander"); // invoking the function

// function expression
var greetFunc = function(name) {
    console.log("Hello, " + name);
}
greetFunc('John');

// Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    
    return "Hello, " + name;
    
}('Bobba');

console.log(greeting)

3;

var firstname = 'Alexander';

(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
})(firstname); // IIFE



