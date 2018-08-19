  // --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let maxChar, maxCount = 0;

  // create object with chars as properties
  // count chars
  for (char of str) {
    if(charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // iterate object, find out max chars
  for (let char in charMap) {
    if(charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char; 
    }
  }

  return maxChar;
}

module.exports = maxChar;
