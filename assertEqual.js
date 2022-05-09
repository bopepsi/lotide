const assertEqual = function (actual, expected) {
    // Check arrays, but not when actual is null or undefined
    //  if (actual !== undefined && actual.length) {
    //      for (var i = 0; i < actual.length; i++) {
    //          if (actual[i] !== expected[i]) {
    //              console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    //              return false;
    //          }
    //      };
    //      return true;
    //  };
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

module.exports = assertEqual;