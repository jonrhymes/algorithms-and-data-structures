// Write a function which takes in a string and returns counts of each character in the string

// "Catatonic" = {c:1, a:2, t:2, o:1, n:1, c:1}
// charCount("aaaa"); // {a:4}

// "my phone number is 184893"
// "Hello hi"
// charCount("") - example with invalid input

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character...
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
        // if the character is a number/letter AND is a key in object, add one to count
            if(result[char] > 0) {
                result[char]++;
        // if the character s a number/letter AND is not in object, add it and set value to 1
            } else {
                result[char] = 1;
            }
        }
        // if character is something else (space, period, etc.) don't do anything
    }
    return result;

    // return object at end

};


function charCountRefactored(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1; 
        }
    }
    return obj;
};

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0 - 9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
};

console.log(charCountRefactored("Happy birthday!!"))