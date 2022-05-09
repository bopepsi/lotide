/*
Implement the function findKey which takes in an object and a callback. 
It should scan the object and return the first key for which the callback returns a truthy value. 
If no key is found, then it should return undefined.
*/

const findKey = (obj, match) => {
    for (var key in obj)
        if (match(obj[key])) return key;
}

module.exports = findKey;

// Test Code
// var listing = {
//     "Blue Hill": { stars: 1 },
//     "Akaleri": { stars: 3 },
//     "noma": { stars: 2 },
//     "elBulli": { stars: 3 },
//     "Ora": { stars: 2 },
//     "Akelarre": { stars: 3 }
// };

// console.log(findKey(listing, x => x.stars === 2));