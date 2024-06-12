const {readFile} = require('fs')

console.log('started our first task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed the task');
})
console.log('starting a new task');
