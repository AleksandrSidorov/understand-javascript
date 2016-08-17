;(function(global, $) {
    
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    // hidden within the scope of the IFFE and never directly accessible
    var supportedLanguages = [ 'en', 'es' ];
    
    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    
    // prototype holds methods (to save memory space)
    Greetr.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            // check that is a valid laguage 
            // references the externally inaccessible 'supportedLangs' 
            // within the closure
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        // retrieve messages from object by referring to properties 
        // using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal) {
            var msg;
            
            // if undefined of null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            if (console) {
                console.log(msg);
            }
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
            
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
        },
        
        setLang: function(lang) {
            if (supportedLanguages.indexOf(lang) !== -1) {
                this.language = lang;
            }
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded!';
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            
            // determine the message
            var msg;
            
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).text(msg);
            
            return this;
        }
        
    };
    
    // The actual object is created here, allowing us to 'new' an object
    // without calling 'new'
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        
        self.firstName = firstName || 'DefaultFirstName';
        self.lastName = lastName || 'DefaultLastName';
        self.language = language || 'en';
        
        self.validate();
        
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' 
    // keyword
    Greetr.init.prototype = Greetr.prototype;
    
    // Attach our Greetr to the global object, adn provide a shorthand
    // $G for ease our poor fingers
    global.Greetr = global.G$ = Greetr;
    
    return Greetr;
    
}(window, jQuery));