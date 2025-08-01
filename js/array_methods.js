// array_methods in JavaScript

let fruits = ['apple', 'banana', 'cherry', 'date'];

// push method: adds an element to the end
fruits.push('mango');
console.log(fruits);

// pop method: removes the last element
fruits.pop();
console.log(fruits);

// shift method: removes the first element
fruits.shift();
console.log(fruits);

// unshift method: adds an element to the beginning
fruits.unshift('kiwi');
console.log(fruits);

// slice method: extracts a section of the array
let letters = ['a', 'b', 'c', 'd', 'e'];
let sliced = letters.slice(1, 4);
console.log(sliced); // ['b', 'c', 'd']

let slicedNumbers = letters.slice(2); // 2 is the start index
console.log(slicedNumbers); // ['c', 'd', 'e']

