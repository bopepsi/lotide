const assertArraysEqual = function (actual, expected) {

    let ans = true;
    const helper = (arr1, arr2) => {
        if (arr1.length !== arr2.length) ans = false;
        for (var i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i])) helper(arr1[i], arr2[i]);
            else { if (arr1[i] !== arr2[i]) ans = false; }
        };
    }
    helper(actual, expected);
    if (ans) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
        return true;
    }
    if (!ans) {
        console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
        return false;
    }

};

module.exports = assertArraysEqual;