// function declaration
/* function hello(firstName, lastName) {
 	return 'hello' + ' ' + firstName + lastName
 }
 console.log(hello('gokul', 'raj')*/

//  get function on if statement

/*function hello(firstName, lastName) {
 	if (typeof firstName === 'undefined') {
 		firstName = 'gokul'
 	}
 	if (typeof lastName === 'undefined') {
 		lastName = 'raj'
 	
 	return 'hello' + ' ' + firstName + lastName
 }
 console.log(hello()*/

//  get value of console

/*const square = function (x) {
	return x * x
}
console.log(square(9))*/

// get value of function
/*const square = function (x = 3) {
	return x * x
}
console.log(square())*/

//  IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFE

;(function () {
	console.log('hello')
})()
