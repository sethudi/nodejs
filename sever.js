'use strict';

let http = require('http');

function foo (request,response) {
    console.log('Hello world');
    response.write('Hello world server');
    response.end();
}
let sever = http.createServer(foo);

sever.listen(8000);

console.log('listening....')