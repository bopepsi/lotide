const assertEqual = function (actual, expected) {
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};

const findKeyByValue = (obj, str) => {
    for (let key in obj) {
        if(obj[key]===str) return key;
    }
    return;
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);