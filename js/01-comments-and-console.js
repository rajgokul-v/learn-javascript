/* 
  Get explanation about:
    * usage of semicolon
    * executing expressions directly in console
    * using filters/search in console(use - to exclude results)
    * using live expressions in console
    * unhandled errors/exception(if an error occurs, code after that line might not be executed)
      - syntax error prevents execution of entire JS(nothing works)
        try adding this statement in midle of your code, 'const variableName'
*/

// This is a single line comment

/* 
  This is a 
  multi line 
  comment 
*/

/* Print value, expression or variable */
console.log('Hello world')
console.log(156)
console.log(true)
console.log([1, 2, 3])
console.log({ firstName: 'Steve', lastName: 'Jobs' })
console.log(3 + 3)
console.log('Text 1' + ', ' + 'Text 2')
console.log('Text ' + 1)

var country = 'India'
console.log(country)

/* Print multiple values(we can use as tags for debugging) */
console.log('value 1', 'value 2', 'value 3')
console.log([1, 2], 'Hello', {
  firstName: 'Steve',
  lastName: 'Jobs',
  searchKeywords: 'value, hello'
})
console.log('userSignIn', 'Some message logged from userSignIn function')

/* Print array & object as table */
console.table([1, 2])
console.table({
  firstName: 'Steve',
  lastName: 'Jobs',
  languagesKnown: ['tamil', 'english']
})

/* Print as warning */
console.warn('You could do better !')
console.warn('value 1', 'value 2', { firstName: 'Steve', lastName: 'Jobs' })

/* Print as error */
console.error('Something went wrong !!')
console.error('value 1', 'value 2', { firstName: 'Steve', lastName: 'Jobs' })

/* Check how long a script runs */
console.time('signin')
console.log('Some JS expressions which you wish to run')
console.timeEnd('signin')
