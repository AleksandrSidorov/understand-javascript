var arr = [1, 
           false, 
          {
              name: 'Alexander', 
              address: 'Gagarina'
          }, 
          function(name) {
              var greeting = 'hello, ';
              console.log(greeting + name);
          }, 
          "hello"];

console.log(arr);
arr[3](arr[2].name);