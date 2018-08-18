// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let arr = str.split("");

  // // half of arr length
  // const halfLength = Math.floor(arr.length / 2);
  // const lastIndex = arr.length-1;
  
  // for(let i = 0; i < halfLength; i++) {
  //   // if the nth element from start is identical to nth from end
  //   if(arr[i] !== arr[lastIndex-i]) {
  //     return false;
  //   }
  // }
  // return true;

  let reversed = arr.reverse().join("");

  return str === reversed;
}

module.exports = palindrome;
