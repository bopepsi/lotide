const assertEqual = function (actual, expected) {
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const eqArrays = function (actual, expected) {
    if (actual.length) {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
                return false;
            }
        };
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
        return true;
    };
    return actual === expected;
};

const middle = array => {
    if (array.length < 2) return [];
    if (array.length % 2 !== 0) return array.slice(array.length / 2, array.length / 2 + 1);
    else return array.slice(Math.floor(array.length / 2-1), Math.ceil(array.length / 2+1));
};

console.log(middle([1,2,3,4,5,6,7]));