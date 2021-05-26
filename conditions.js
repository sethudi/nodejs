'use strict';

let number = process.argv[2];
let x = 0;
let names = ['sethudi','tshwene'];
names.push('semaka');

console.log('length of names is', names.length);
if (number < 20){
    console.log('hello world');
}
console.log(names);

while (x < 3){
    console.log('my name is sethudi');
    x++;
}