const letterPositions = (sentence = sentence.replace(' ', '')) => {
    const results = {};
    for (var i = 0; i < sentence.length; i++) {
        results[sentence[i]] = results[sentence[i]] ? results[sentence[i]].push(i):[i];
    }
    return results;
};

console.log(letterPositions('hello'));