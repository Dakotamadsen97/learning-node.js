const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const fs = require('fs')
fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//adds to file
// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result ${first}, ${second}`,
//     {flag: 'a'}
// )


//overwrites file
writeFileSync(
    './content/result-sync.txt',
    `here is the result ${first},
    ${second}`
    )

console.log('finised task')
console.log('starting next one')