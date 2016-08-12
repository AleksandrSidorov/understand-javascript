// IIFE
var firstname = 'John';

(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Preved'
    
    console.log(greeting + ' ' + name);
    
}(window, firstname)); // IIFE


console.log(greeting);



















