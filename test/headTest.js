const { expect } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

// Test Code
// assertEqual(head([]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Mocha Test
describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
        let result = head([1, 2, 3]);
        let expected = 1;
        expect(result).to.equal(expected);
    });
    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '5');
    });
});