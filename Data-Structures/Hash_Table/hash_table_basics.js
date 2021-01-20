// Hash tables are used to store key-value pairs
// Like arrays, but keys are not ordered
// Fast for finding, adding and removing values

// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         // map "a" to 1, "b" to 2, etc.
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash("goodbye", 13))

// SEPARATE CHAINING - Multiple key-value pairs at each index
// LINEAR PROBING - Stores single key-value pair at each index