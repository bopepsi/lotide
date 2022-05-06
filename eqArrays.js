const assertEqual = function (actual, expected) {
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const eqArrays = function (actual, expected) {
    let ans = true;
    const helper = (arr1, arr2) => {
        if (arr1.length !== arr2.length) ans = false;
        for (var i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i])) helper(arr1[i], arr2[i]);
            else { if (arr1[i] !== arr2[i]) ans = false; }
        };
    }
    helper(actual, expected);
    return ans;
};


// TEST CODE
console.log(eqArrays("Lighthouse Labs", "Bootcamp"));

console.log(eqArrays(1, 1));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true));

console.log('=====================================')


console.log(eqArrays([2, [2, 3], [4]], [2, 2, [2, 3], [4]]))    // => true

console.log(eqArrays([[2, 3], [4, 5]], [[2, 3], [4, 5]])) // => false

console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]))      // => false