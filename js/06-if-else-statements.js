//  basic stucture of if else
if (something) {
	console.log('do something')
} else {
	console.log('do not something')
}

let id = 100
// Equal to
if (id == 100) {
	console.log('correct')
} else {
	console.log('Incorrect')
}

// Not Equal to

if (id != 100) {
	console.log('correct')
} else {
	console.log('incorrect')
}

if (id === 100) {
	console.log('correct')
} else {
	console.log('incorrect')
}
if (id !== 100) {
	console.log('correct')
} else {
	console.log('incorrect')
}

if (id) {
	console.log(`THE ID IS ${id}`)
} else {
	console.log(`NOT A ID`)
}
// test id undefined
if (typeof id !== 'undefined') {
	console.log(`THE ID IS ${id}`)
} else {
	console.log(`NOT A ID`)
}

let color = 'yellow'

if (color === 'red') {
	console.log('color is red')
} else if (color === 'blue') {
	console.log('color is blue')
} else if (typeof color === 'undefined') {
	console.log('color is undefined')
} else {
	console.log('color is not red or blue')
}

// logical oprator

let firstName = 'Gokul'
let age = 16

//And opretor

if (age > 0 && age < 12) {
	console.log(`${firstName} is a child`)
} else if (age >= 13 && age <= 20) {
	console.log(`${firstName} is a teenager`)
} else {
	console.log(`${firstName} is a adult`)
}

// or opretor

if (age < 16 || age > 65) {
	console.log(`${firstName} is not run race`)
} else {
	console.log(`${firstName} is register for the race`)
}

// TERNARY OPRETOR
console.log(age == 15 ? 'correct' : 'Incorrect')

// WITHOUT BRACE

if (age === 16) console.log('correct')
else console.log('incorrect')
