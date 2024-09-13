// 100 Days Of Coding Challenge!

/** Question 139: Reserved Words in JavaScript
List three reserved words in JavaScript and create a valid use case for each.*/

//------------------------------------------------------------------------------

// Reserved word 1: `class`
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Reserved word 2: `const`
const pi = 3.14; // `const` is used to declare a constant variable that cannot be reassigned

// Reserved word 3: `return`
function add(a: number, b: number): number {
  return a + b; // `return` is used to return a value from a function
}