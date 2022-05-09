const countLetters = str => {
    let ans = {};
    for (var char of str.replace(' ', '')) {
        ans[char] = (ans[char] || 0) + 1;
    }
    return ans;
};

module.exports = countLetters;
