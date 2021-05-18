//
// function hello(firstName, lastName) {
// 	return 'hello' + ' ' + firstName + lastName
// }
// console.log(hello('gokul', 'raj'))

// function hello(firstName, lastName) {
// 	if (typeof firstName === 'undefined') {
// 		firstName = 'gokul'
// 	}
// 	if (typeof lastName === 'undefined') {
// 		lastName = 'raj'
// 	}

// 	return 'hello' + ' ' + firstName + lastName
// }
// console.log(hello())

// const square = function (x) {
// 	return x * x
// }
// console.log(square(9))

// const square = function (x = 3) {
// 	return x * x
// }
// console.log(square())
// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFES

function(){
  console.log('Hello world')
}()
