/*
  Get explanation about:
    * JS is dynamically typed
      - data type of an variable is based on assigned value
      - data type is not specified explicitly
      - data type of an variable can change when reassigned
      - to have static typing we can consider using TypeScript
        (TypeScript is a superset of JS. Includes all of JS + static typing + additional features)
    * Primitive data types
      - values are directly stored in variables
      - string, number(includes integer, float), boolean, null, undefined, symbol(ES6)
    * Structural data types
      - values are stored in heap(RAM) and are accessed using pointers or reference
      - function, array, object, date
*/

/* 
  Primitive data types 
*/
// String
let val1 = 'Google'
console.log(val1)
console.log('typeof:', typeof val1, '\n ')

// Number : integer, float
// * integer
let val2 = 50
console.log(val2)
console.log('typeof:', typeof val2, '\n ')

// * float
let val3 = 34.816
console.log(val3)
console.log('typeof:', typeof val3, '\n ')

// Boolean
let val4 = true
console.log(val4)
console.log('typeof:', typeof val4, '\n ')

// null (we can empty an object by setting it to null)
let val5 = null
console.log(val5)
console.log('typeof:', typeof val5, '\n ') // this would print object, it can be considered a bug

// undefined (any variable declared without an value returns undefined)
let val6
console.log(val6)
console.log('typeof:', typeof val6, '\n ')

// undefined and null are equal in value but different in type
console.log(null == undefined) // true, checks only for value
console.log(null === undefined) // false, check for both value & type

/* 
  Structural data types 
*/
// Object : Array, Object, Date, Set, Map
// * Array
let val7 = [1, , 'Steve', 'Bob', [2, 4], { greetings: 'hello world' }]
console.log(val7)
console.log('typeof:', typeof val7, '\n ')

// Object
let val8 = {
  firstName: 'Steve',
  lastName: 'Jobs',
  age: 15,
  languagesKnown: ['tamil', 'english']
}
console.log(val8)
console.log('typeof:', typeof val8, '\n ')

// * Date
let val9 = new Date()
console.log(val9)
console.log('typeof:', typeof val9, '\n ')

// function
let val10 = function () {
  return 5 * 2
}
console.log('function def:', val10) // returns function definition
console.log('invoke function:', val10()) // invokes or executes the function
console.log('typeof:', typeof val10, '\n ')
