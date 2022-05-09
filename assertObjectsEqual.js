const assertObjectsEqual = (actual, expected) => {
    const inspect = require('util').inspect;
    if (Object.keys(actual).length !== Object.keys(expected).length) {
        console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return false;
    }
    for (var key in actual) {
        let expectedVal = expected[key];
        if (Array.isArray(actual[key])) {
            console.log('checking array')
            if (actual[key].length !== expectedVal.length) {
                console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
                return false;
            }
            for (var i = 0; i < actual[key].length; i++) {
                if (actual[key][i] !== expectedVal[i]) {
                    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
                    return false;
                }
            }
            continue;
        }
        if (typeof actual[key] !== 'object') {
            console.log('checking primitive vals')
            if (actual[key] !== expectedVal) {
                console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
                return false;
            }
        } else {
            console.log('checking obj')
            return assertObjectsEqual(actual[key], expectedVal);
        }
    } console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

    return true;
};

// Test Code
// const cd = { c: "1", d: ["2", 3], o: { name: 'ok' } };
// const dc = { d: ["2", 3], c: "1", o: { name: 'ok' } };
// assertObjectsEqual(cd,dc);

module.exports = assertObjectsEqual;