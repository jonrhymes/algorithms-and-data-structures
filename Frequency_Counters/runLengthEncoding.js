/*
Implement a function which does run-length encoding.
This means that, given a string, it replaces repeated characters with the number of times they are repeated and the character.

For example: `runlength_encode("aabbbcaa")` should return `"2a3b1c2a"`.
*/

function encodeWord(word) {
    // Variables that data gets stored into.
    let lastLetter, currentCount;
    
    // We end up appending everything to this string.
    let output = '';
    
    for (let i = 0; i < word.length; i++) {
      // Initial character case.
      if (typeof lastLetter === 'undefined') {
        lastLetter = word[i];
        currentCount = 1;
        
        continue;
      }
      
      /* If the current character isn't the last character, 
        then we know it's a new word and we should start over.
      */
      if (word[i] !== lastLetter) {
        // Appends the character count and the last character to the output string.
        output += currentCount + lastLetter;
        lastLetter = word[i];
        currentCount = 1;
        
        //continue
        continue;
      }
  
      currentCount++;
    }
    
    // Returns the output, and the last character.
    console.log(output + (currentCount + lastLetter))
    return (output + (currentCount + lastLetter))
    
  }
  
  encodeWord('aabbbcaa')