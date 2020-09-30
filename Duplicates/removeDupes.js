// 3 WAYS:
let array = [-5, 'hi', 10, -5, 8, 8, 9, 11, 10, 11, 'hi', 'hi']

// 1: 
// console.log([...new Set(array)])


// 2:
// console.log(array.filter((item, index) => array.indexOf(item) === index));


// 3:
console.log(array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []));