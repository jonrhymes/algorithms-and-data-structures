function stringSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break;
            if (j === short.length - 1) count++;
        } 
    }
    return count;
};

// l o r i e l o l e d   l o l
// 0 1 2 3 4 5 6 7 8 9   0 1 2

// i: 7
// j: 1



// define a function that takes two strings

function stringSearch(long, short) {
    var count = 0;
    // loop over the longer string
    for (var i = 0; i < long.length; i++) {
        // loop over the shorter string
        for (var j = 0; j < short.length; j++) {
            console.log(short[j], long[i+j])
            if (short[j] !== long[i+j]) {
                console.log("BREAK!")
                  // if the characters don't match, break out of the inner loop
                break;
            } // if the characters do match, keep going in the short string
            if (j === short.length - 1) {
                // if you complete the inner loop and find a match, increment the count of matches
                console.log("FOUND ONE!")
                count ++;
            }
        } 
    }
    // return the count
    return count;
}


console.log(stringSearch("lorie loled", "lol"))
