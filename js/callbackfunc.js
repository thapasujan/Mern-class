// call back function practice

// let greet = (name, cb) => {
//     return cb(name);
// }

// let cb = (name) => {
//     return `Hello, ${name}`;
// }

// let greeting = greet("Sujan", cb);
// console.log(greeting);

let add = (a,b) => {
    return a + b;
}

let sub = (a,b) => {
    return a-b;
}

let calc = (a, b, cb) => {
    return cb(a, b);
}

console.log(calc(5,6, add)); // 11
console.log(calc(5,6, sub)); // -1



