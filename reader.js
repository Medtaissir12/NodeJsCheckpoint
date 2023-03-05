const fs = require('fs');
// create file
fs.writeFile('mynewfile3.txt', 'This is my text');

// read file 

const data = fs.readFile('welcome.txt', 'utf8');
console.log(data);