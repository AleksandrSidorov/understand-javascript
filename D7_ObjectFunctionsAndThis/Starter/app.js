// console.log(this);

function a() {
    console.log(this);
    this.newVariable = 'hello!';
}

var b = function () {
    console.log(this);
};

a();
console.log(newVariable);
b();

var c = {
    name: 'The c object', 
    log: function() {
        var self = this;
        
        this.name = 'Updated c object';
        console.log(this);
        
        var setName = function(newname) {
            this.name = newname; // this points to global object, not to c object
            self.name = newname; // self points to c object, not to global object
        }
        
        setName('Updated again! The c object');
        console.log(this);
    }
};

c.log();