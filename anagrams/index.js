// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
//     let charMapA = charMap(normalize(stringA));
//     let charMapB = charMap(normalize(stringB));
    
//     // first compare number of keys
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }
    
//     // compare if char count is the same
//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }
    
//     return true;

    // ALTERNATIVE SOLUTION - SORTING STRING
    let strA = normalize(stringA).split("").sort().join("");
    let strB = normalize(stringB).split("").sort().join("");
    
    return strA === strB;
 }


// replace every non char character, and lowercase
const normalize = string => string.replace(/[\W]/g, "").toLowerCase();

// create object with chars as keys, and number of chars as props
const charMap = string => {
    let charMap = {};
    let stringArr = string.split("");
    
    stringArr.forEach(char => {
        if(!charMap.hasOwnProperty(char)) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    });
    
    return charMap;
}
    
module.exports = anagrams;
