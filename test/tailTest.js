const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail');

// Test Code
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!