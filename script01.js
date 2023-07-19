// Filtering
console.log(".filter()")
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
let longWords = words.filter(word => word.length > 6);
console.log(longWords);

// Mapping
console.log(".map()");
let numbers = [1, 9, 16];
let roots = numbers.map(Math.sqrt);
console.log(roots);

// Reducing
console.log(".reduce()");
let myArray = [0, 1, 2, 3, 4];
myArray.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
}, 0);
console.log(myArray);

// forEach()
console.log(".forEach()");
const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
    copy.push(item);
});
console.log(copy);

// .some()
console.log(".some()");

function isBiggerThan10(element, index, array){
    return element > 10;
}

let myArr01 = [2, 5, 8, 1, 4]; // false
let myArr02 = [12, 5, 8, 1, 4]; // true
console.log(myArr01.some(isBiggerThan10));
console.log(myArr02.some(isBiggerThan10));

// Object.values(), Object.keys(), Object.entries()
console.log("Object.values(), Object.keys(), Object.entries()");
// array like object
var obj = {0 : 'a', 1 : 'b', 3 : 'c'};
console.log(Object.keys(obj));   // ['0', '1', '3']
console.log(Object.values(obj)); // ['a', 'b', 'c']
console.log(Object.entries(obj));// [['0', 'a'], ['1', 'b'], ['2', 'c']]

