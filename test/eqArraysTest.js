const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
console.log(eqArrays("Lighthouse Labs", "Bootcamp"));
console.log(eqArrays(1, 1));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true));
console.log('=====================================')
console.log(eqArrays([2, [2, 3], [4]], [2, [2, 3], [4]]))    // => true
console.log(eqArrays([[2, 3], [4, 5]], [[2, 3], [4, 5], [6]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]))      // => false