const { sum } = require('./src/calculator');



const a = 10;
const b = 20;

console.log(`Calculating ${a} + ${b}`);

const result = sum(a, b);

console.log(`Result: ${result}`);