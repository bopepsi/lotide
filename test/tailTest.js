const { assert } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// Test Code
const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertArraysEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!

// Mocha Test
describe("#tail", () => {
    it(`returns ["Lighthouse", "Labs"] after tailing ["Yo Yo", "Lighthouse", "Labs"] with `, () => {
        assert.deepEqual(tail(words), ["Lighthouse", "Labs"], 'GOOD!')
    });
});