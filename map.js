/*
Our map function will take in two arguments:
    An array to map
    A callback function
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, transform) => {
    const results = [];
    arr.forEach(item => results.push(transform(item)));
    return results;
};

module.exports = map;


// Test Code
// const results1 = map(words, word => word[0]);
// console.log(results1);