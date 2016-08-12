function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
    
}

greet('Hi')('Alexander');

var sayHi = greet('Hi');

sayHi('Tony');