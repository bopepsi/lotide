const findKeyByValue = (obj, str) => {
    for (let key in obj) {
        if(obj[key]===str) return key;
    }
    return;
}

module.exports = findKeyByValue;

// Test Code
// const bestTVShowsByGenre = {
//     sci_fi: "The Expanse",
//     comedy: "Brooklyn Nine-Nine",
//     drama: "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);