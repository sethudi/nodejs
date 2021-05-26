'use strict';

function greet(name){
    console.log("hello", name);
    return name;
}

let name = greet('sethudi');
console.log("the value beeing returned is", name);

let greet2 = function() {
    console.log("greet2");
}
greet2();

let greet3 = ()=>{
    return 5;
}

console.log(greet3);