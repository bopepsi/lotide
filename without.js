const without = (words, filter) => {
    let length = words.length;
    for (var i = 0; i < length; i++) {
        if (filter.includes(words[i])) {
            words.splice(i, 1);
            i--;
            length = words.length;
        }
    }
}

module.exports = without;

// Test
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouscleare",'world']); 
// console.log(words);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
