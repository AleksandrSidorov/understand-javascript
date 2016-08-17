// Gets a new object (the architecture allows us to not have to use the
// 'new' keyword here)
var g = G$("John", "Doe");

// Use our chainable mothods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$("#login").click(function() {
    
    // Create a new 'Greetr' object (let's pretend we know the name 
    //from the login)
    var loginGrtr = G$('John', 'Doe');
    
    // Hide the login on the screen
    $('#logindiv').hide();
    
    // Fire off an HTML greetnig, passing the '#greeting' as the 
    // selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});

console.log(g);