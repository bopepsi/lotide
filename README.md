# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bopepsi/lotide`

**Require it:**

`const _ = require('@bopepsi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

const assertArraysEqual = function (actual, expected) {

    let ans = true;
    const helper = (arr1, arr2) => {
        if (arr1.length !== arr2.length) ans = false;
        for (var i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i])) helper(arr1[i], arr2[i]);
            else { if (arr1[i] !== arr2[i]) ans = false; }
        };
    }
    helper(actual, expected);
    if (ans) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
        return true;
    }
    if (!ans) {
        console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
        return false;
    }

};

const assertEqual = function (actual, expected) {
    // Check arrays, but not when actual is null or undefined
    //  if (actual !== undefined && actual.length) {
    //      for (var i = 0; i < actual.length; i++) {
    //          if (actual[i] !== expected[i]) {
    //              console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    //              return false;
    //          }
    //      };
    //      return true;
    //  };
    if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return actual === expected;
};


const assertObjectsEqual = (actual, expected) => {
    const inspect = require('util').inspect;
    if (Object.keys(actual).length !== Object.keys(expected).length) {
        console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return false;
    }
    for (var key in actual) {
        let expectedVal = expected[key];
        if (Array.isArray(actual[key])) {
            console.log('checking array')
            if (actual[key].length !== expectedVal.length) {
                console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
                return false;
            }
            for (var i = 0; i < actual[key].length; i++) {
                if (actual[key][i] !== expectedVal[i]) {
                    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
                    return false;
                }
            }
            continue;
        }
        if (typeof actual[key] !== 'object') {
            console.log('checking primitive vals')
            if (actual[key] !== expectedVal) {
                console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
                return false;
            }
        } else {
            console.log('checking obj')
            return assertObjectsEqual(actual[key], expectedVal);
        }
    } console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

    return true;
};

const countLetters = str => {
    let ans = {};
    for (var char of str.replace(' ', '')) {
        ans[char] = (ans[char] || 0) + 1;
    }
    return ans;
};

const countOnly = function (allItems, itemsToCount) {
    let temp = {};
    for (var item of allItems) {
        if (itemsToCount[item]) temp[item] = (temp[item] || 0) + 1;
    };
    return temp;
};

const eqArrays = function (actual, expected) {
    let ans = true;
    const helper = (arr1, arr2) => {
        if (arr1.length !== arr2.length) ans = false;
        for (var i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i])) helper(arr1[i], arr2[i]);
            else { if (arr1[i] !== arr2[i]) ans = false; }
        };
    }
    helper(actual, expected);
    return ans;
};

const eqObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (var key in obj1) {
        let obj2Val = obj2[key];
        if (Array.isArray(obj1[key])) {
            console.log('checking array')
            if (obj1[key].length !== obj2Val.length) return false;
            for (var i = 0; i < obj1[key].length; i++) {
                if (obj1[key][i] !== obj2Val[i]) return false;
            }
            continue;
        }
        if (typeof obj1[key] !== 'object') {
            console.log('checking primitive vals')
            if (obj1[key] !== obj2Val) return false;
        } else {
            console.log('checking obj')
            return eqObjects(obj1[key], obj2Val);
        }
    }
    return true;
};

const findKey = (obj, match) => {
    for (var key in obj)
        if (match(obj[key])) return key;
};

const findKeyByValue = (obj, str) => {
    for (let key in obj) {
        if(obj[key]===str) return key;
    }
    return;
};

const flatten = arr => {
    let ans = [];
    for (var item of arr) {
        if (item.length) ans = ans.concat(flatten(item));
        else ans.push(item);
    }
    return ans;
};

const head = arr => arr ? arr[0] : undefined;

const letterPositions = (sentence = sentence.replace(' ', '')) => {
    const results = {};
    for (var i = 0; i < sentence.length; i++) {
        if (results[sentence[i]]) results[sentence[i]].push(i);
        else results[sentence[i]] = [i];
    }
    return results;
};

const map = (arr, transform) => {
    const results = [];
    arr.forEach(item => results.push(transform(item)));
    return results;
};

const middle = array => {
    if (array.length < 2) return [];
    if (array.length % 2 !== 0) return array.slice(array.length / 2, array.length / 2 + 1);
    else return array.slice(Math.floor(array.length / 2-1), Math.ceil(array.length / 2+1));
};

const tail = arr => {
    if (arr.length === 1) return [];
    let result = [...arr].slice(1);
    arr.slice()
    return result;
};

const takeUntil = function (array, callback) {
    let results = [];
    for (var element of array) {
        if (!callback(element)) results.push(element);
        if(callback(element)) break;
    }
    return results;
};

const without = (words, filter) => {
    let length = words.length;
    for (var i = 0; i < length; i++) {
        if (filter.includes(words[i])) {
            words.splice(i, 1);
            i--;
            length = words.length;
        }
    }
};