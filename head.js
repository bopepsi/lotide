const assertEqual = function (actual, expected) {
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const head = arr => arr ? arr[0] : undefined;

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");