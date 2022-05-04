// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function (actual, expected) {
    if (actual !== undefined && actual.length) {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
                return false;
            }
        };
        return true;
    };
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const countOnly = function (allItems, itemsToCount) {
    let temp = {};
    for (var item of allItems) {
        if (itemsToCount[item]) temp[item] = (temp[item] || 0) + 1;
    };
    return temp;
};

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);