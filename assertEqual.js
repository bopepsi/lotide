const assertEqual = function (actual, expected) {
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

// TEST CODE
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));