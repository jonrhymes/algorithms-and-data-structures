// Reverse String if it's already split in an array. Ex: ['h','e','l','l','o'] => ['o','l','l','e','h']

const reverseString = function (s) {

    let left = 0;
    let right = s.length - 1;

    // main loop
    while (left < right) {
        // swap
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // advances left pointer until middle
        left++;

        // advances right pointer until they meet in the middle
        right--;
    }
    return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))


const reverseStringWhole = function (s) {

    // preprocessing step
    let letters = s.split('');

    // L & R pointers
    let left = 0;
    let right = s.length - 1;

    // main loop
    while (left < right) {
        // swap
        let temp = letters[left];
        letters[left] = letters[right];
        letters[right] = temp;

        // advances left pointer until middle
        left++;

        // advances right pointer until they meet in the middle
        right--;
    }
    return letters;
}

console.log(reverseStringWhole("hello"))


