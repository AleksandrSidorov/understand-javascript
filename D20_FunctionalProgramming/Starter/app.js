function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    
    return newArr;
    
}



var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}


var arr3 = mapForEach(arr1, function(item) {
    return item * 2;
});

var arr4 = mapForEach(arr1, function(item) {
    return item > 2;
});


var checkPastLimit = function(limiter, item) {
    return item > limiter;
};

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));

var arr6 = mapForEach(arr1, checkPastLimitSimplified(1));


console.log('Oldschool: ');
console.log(arr2);
console.log('Functional: ');
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);