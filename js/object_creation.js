// creation of objects in JavaScript

const person = {
    name: 'Sujan',
    age: 23,
    gender: 'male',
    program: 'BIT',
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
} 

console.log(person.greet());
console.log(person)

let name = person.name;
let age = person.age;

console.log(`Name: ${name}, Age: ${age}`);