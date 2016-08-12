function greet(firstname, lastname, language) {
    language = language || 'en';
    
    if (language === 'en') {
        console.log("Hello " + firstname + ' ' + lastname);
    }
    
    if (language === 'es') {
        console.log("Hola " + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');
greet('John', 'Doe', 'en');

greetEnglish('Alexander', 'Sidorov');
greetSpanish('Jose', 'Ortega');