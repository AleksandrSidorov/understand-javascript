function greet(firstname, lastname, language) {
    
    language = language || 'en';
    
    if (arguments.length === 0) {
        console.log('Missing parameters');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('Argument 0 is ' + arguments[0]);
    console.log('-------------');
}

greet();
greet('Alexander');
greet('Alexander', 'Sidorov');
greet('Alexander', 'Sidorov', 'English');