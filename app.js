import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';

console.log('Add:', add(5, 3));
console.log('Subtract:', subtract(8, 1));
console.log('Uppercase:', toUpperCase('hello'));
console.log('Lowercase:', toLowerCase('GUHBYE'));
console.log('Multiply:', multiply(8, 18));
console.log('Max:', findMax([1, 2, 3, 4, 5]));
console.log('Reversed:', reverseArray([1, 2, 3]));
addAndLogUpper(10, 20);

const numbers = [8, 18, 88, 13, 6];
const maxValue = findMax(numbers);
const result = toUpperCase(multiply(maxValue, 2).toString());

console.log(`🩸.. ${result} ...`);