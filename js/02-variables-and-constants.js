/*
  Get explanation about:
    * variables & constants are pointers
    * var, let, const
    * can declare & initialize variables without keywords var, let, const
*/

/*
  Naming conventions:
    * can contain letters, numbers, _, $
    * can't start with number
    * prefer camecase or use _ to seperate words(while using _, prefer lowercase)
    * prefer uppercase for global constants & seperate words with _
*/

/* 
  var
  Note:
    * can contain any data type
    * not necessarily initialized on declaration
    * can be reinitialized, mutated/modified
    * when uninitialized returns undefined
    * scoped to the immediate function(function scoped)
*/
var a
console.log('var without initialization:', a)
var country = 'India'
var primeMinister = 'Steve' // Camel case(preferred)
var finance_minister = 'Jobs' // _ seperated
var age = 25
var group = null
var distanceCovered = 3.6
var isLoggedIn = true
var birthday = new Date(2000, 0, 13)
var stateNames = ['Tamil Nadu', 'Kerala']
var student = { firstName: 'Tom', lastName: 'Cruise', class: 10 }

// initializing after declaration
var hasOwnVehicle
hasOwnVehicle = true

// reinitializing
var isOnline = false
isOnline = true

// can be redeclared
var isOnline = null

/* 
  let
  Note:
    * similar to 'var', except that it's availble only in the immediate block usually represented by {}
    * can contain any data type
    * not necessarily initialized on declaration
    * can be reinitialized, mutated/modified
    * when uninitialized returns undefined
    * scoped to the immediate block {}(block scoped)
*/
let b
console.log('let without initialization:', b)
let continent = 'Asia'

// initializing after declaration
let hasCar
hasCar = true

// reinitializing
let isPrivate = true
isPrivate = false

// can't be redeclared, throws SyntaxError
// try uncommenting below statement
// let isPrivate = false

/* Difference between var & let */
function print() {
  var a = 'var a'
  let b = 'let b'

  console.log('function scope:', a, b) // var a, let b

  {
    var c = 'var c'
    let d = 'let d'
    console.log('block scope:', c, d) // var c, var d
  }

  console.log('function scope:', c) // var c
  console.log('function scope:', d) // ReferenceError
}

print()

/*
  const
  Note: 
    * use when you don't want something to change or reinitialized, eg. function definition
    * can contain any data type
    * should be initialized on declaration
    * prevents reinitialization, but allows array & object modification/mutation
*/
// Decalaration
const schoolName = 'Indian Public School'

// Declaration without initialization is not allowed, throws an SyntaxError
// try uncommenting below statement, 'const status'
// const status

// Array mutation
const languagesKnown = ['tamil', 'english', 'telugu']
console.log('init:', languagesKnown)
// allowed
languagesKnown.pop()
console.log('pop:', languagesKnown)
languagesKnown.push('malayalam')
console.log('push:', languagesKnown)
// not allowed, throws an error
languagesKnown = ['tamil', 'english', 'malayalam']

// Object mutation
const user = { firstName: 'Steve', lastName: 'Jobs' }
console.log('init:', user)
// allowed
user.lastName = 'Smith'
console.log('modify:', user)
// not allowed, throws an error
user = { firstName: 'Steve', lastName: 'Smith' }

/*
  Same variable name cannot be used within a scope even if variable type is different
    * for any combination of variable type(var, let, const)
    * throws SyntaxError
*/
// uncomment below section to see the error

// var browserName
// let browserName

// // or
// var browserName
// const browserName = 'Chrome'

// // or
// let browserName
// const browserName = 'Chrome'
