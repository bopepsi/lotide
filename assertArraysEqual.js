const assertArraysEqual = function (actual, expected) {
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

module.exports = assertArraysEqual;