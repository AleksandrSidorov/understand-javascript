function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

function aa() {
    
    function bb() {
        console.log(myVar);
    }
    
    var myVar = 2;
    bb();
}


var myVar = 1;
a();
aa();