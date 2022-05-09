// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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

module.exports = countOnly;

// Test Code
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);

