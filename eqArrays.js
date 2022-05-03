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
        return true;
    };
    return actual === expected;
};

// TEST CODE
console.log(eqArrays("Lighthouse Labs", "Bootcamp"));

console.log(eqArrays(1, 1));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true));