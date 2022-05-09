const flatten = arr => {
    let ans = [];
    for (var item of arr) {
        if (item.length) ans = ans.concat(flatten(item));
        else ans.push(item);
    }
    return ans;
}

module.exports = flatten;

// Test Code
// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]