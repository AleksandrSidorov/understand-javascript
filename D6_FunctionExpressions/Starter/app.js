var a;

// statement:
if (a === 3) {
    
}

greet();

// statement (function statement)
function greet() {
    console.log('hi');
}

//anonymousGreet(); // undefined is not a function 

// function expression (function is not hoisted, just var = undefined)
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    console.log(a);
}

log('Hello!');
log({ greeting: 'Hi!'});

log(function() {console.log('hi')});

