const assertEqual = function (actual, expected) {
    // compare arrays
    if (actual !== undefined && actual.length) {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
                return false;
            }
        };
        return true;
    };
    // compare primitive vals
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const countLetters = str => {
    let ans = {};
    for (var char of str.replace(' ', '')) {
        ans[char] = (ans[char] || 0) + 1;
    }
    return ans;
};
console.log(countLetters('hello world'));
