const assertEqual = function (actual, expected) {
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
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const tail = arr => {
    if (arr.length === 1) return [];
    let result = [...arr].slice(1);
    return result;
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!