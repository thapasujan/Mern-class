const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numbers_find = numbers.find(num => num > 5)
console.log(numbers_find);

const numbers_filter = numbers.filter(num => num > 5)
console.log(numbers_filter);


const numbers_map = numbers.map(num => num * 2)
console.log(numbers_map);