const middle = array => {
    if (array.length < 2) return [];
    if (array.length % 2 !== 0) return array.slice(array.length / 2, array.length / 2 + 1);
    else return array.slice(Math.floor(array.length / 2-1), Math.ceil(array.length / 2+1));
};

console.log(middle([1,2,3]))
module.exports = middle;