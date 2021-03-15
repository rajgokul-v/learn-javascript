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
  Convert to String : using String(), .toString()
*/
// using String() (preferred)
let str1 = String(5)
console.log(str1)
console.log('typeof:', typeof str1, '\n ')

// using .toString()
let str2 = (5.27).toString()
console.log(str2)
console.log('typeof:', typeof str2, '\n ')

// from number
let str3 = String(5.27)
console.log(str3)
console.log('typeof:', typeof str3, '\n ')

// from boolean
let str4 = String(true)
console.log(str4)
console.log('typeof:', typeof str4, '\n ')

// from null. Only String() works, .toString() will throw an TypeError
let str5 = String(null)
// let str5a1 = null.toString()
console.log(str5)
console.log('typeof:', typeof str5, '\n ')

// from undefined. Only String() works, .toString() will throw an TypeError
let str6 = String(undefined)
// let str6a1 = undefined.toString()
console.log(str6)
console.log('typeof:', typeof str6, '\n ')

// from array. Concatenates array elements into a comma seperated string
// objects will be represented as [object Object]
let str7 = String([
  1,
  'Steve',
  'Bob',
  [2, [3, 4]],
  { greetings: 'hello world' }
])
console.log(str7)
console.log('typeof:', typeof str7, '\n ')

// from object. Returns [object Object]
let str8 = String({
  firstName: 'Steve',
  lastName: 'Jobs',
  age: 15,
  languagesKnown: ['tamil', 'english'],
  education: {
    schoolingCompleted: true,
    graduationCompleted: false
  }
})
console.log(str8)
console.log('typeof:', typeof str8, '\n ')

/* 
  Convert to Number : Number(), parseInt(), parseFloat() 
*/
// using Number() : Automatically detects integer & float
// if unable to convert NaN will be returned. NaN is a number value
let num1a1 = Number('50.0') // converted to ineteger
console.log(num1a1)
console.log('typeof:', typeof num1a1, '\n ')

let num1a2 = Number('50.001') // converted to float
console.log(num1a2)
console.log('typeof:', typeof num1a2, '\n ')

let num1a3 = Number('50h') // returns Nan
console.log(num1a3)
console.log('typeof:', typeof num1a3, '\n ')

// * using parseInt()
//   returns the number, if the first value starts with an number
//   (even a string with first character as number)
let num2a1 = parseInt('6.27 miles') // converted to integer, returns 6
console.log(num2a1)
console.log('typeof:', typeof num2a1, '\n ')

// * using parseFloat()
//   returns the number, if the first value starts with an number
//   (even a string with first character as number)
let num2a2 = parseFloat(8.963) // converted to float
console.log(num2a2)
console.log('typeof:', typeof num2a2, '\n ')

let num2a3 = parseFloat(3) // converted to float, but printed as 3
console.log(num2a3)
console.log('typeof:', typeof num2a3, '\n ')

// from boolean. true represented as 0 and false as 1
let num4 = Number(true)
console.log(num4)
console.log('typeof:', typeof num4, '\n ')

// from null. Returns NaN
let num5 = Number(null)
console.log(num5)
console.log('typeof:', typeof num5, '\n ')

// from undefined. Returns NaN
let num6 = Number(undefined)
console.log(num6)
console.log('typeof:', typeof num6, '\n ')

// from array. Returns NaN
let num7 = Number([
  19,
  'Steve',
  'Bob',
  [2, [3, 4]],
  { greetings: 'hello world' }
])
console.log(num7)
console.log('typeof:', typeof num7, '\n ')

// but parseInt() or parseFloat()
// returns the number, if the first value starts with an number
// (even a string with first character as number)
let num7a1 = parseFloat([
  '19.5years',
  'Steve',
  'Bob',
  [2, [3, 4]],
  { greetings: 'hello world' }
])
console.log(num7a1) // returns 19.5
console.log('typeof:', typeof num7a1, '\n ')

// from object. Returns NaN
let num8 = Number({
  firstName: 'Steve',
  lastName: 'Jobs',
  age: 15,
  languagesKnown: ['tamil', 'english'],
  education: {
    schoolingCompleted: true,
    graduationCompleted: false
  }
})
console.log(num8)
console.log('typeof:', typeof num8, '\n ')

/* 
  Type coercion : automatic conversion of one data type to another
*/
let a = 'Age'
let b = 21
let c = a + b
console.log(a)
console.log('typeof:', typeof a)
console.log(b)
console.log('typeof:', typeof b)
console.log(c)
console.log('typeof:', typeof c)
