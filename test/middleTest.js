const { expect } = require('chai');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

// Test Code
// assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);

// Mocha Test
describe('#middle', () => {
    it('returns [2,3] for [1,2,3,4]', () => {
        expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
    });
    it('returns [2] for [1,2,3]', () => {
        expect(middle([1, 2, 3])).to.deep.equal([2]);
    });
});