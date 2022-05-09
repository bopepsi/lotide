const tail = arr => {
    if (arr.length === 1) return [];
    let result = [...arr].slice(1);
    arr.slice()
    return result;
};

module.exports = tail;