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
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba))
// => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc))
// => false

const cd = { c: "1", d: ["2", 3], o: { name: 'okay' } ,k:1};
const dc = { d: ["2", 3], c: "1", o: { name: 'okay' } ,k:1};
console.log(eqObjects(cd, dc))
// => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2))
 // => false