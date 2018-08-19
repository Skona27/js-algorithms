// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // int to arr of strings
  let arr = n.toString().split("");
  // reverse arr
  arr.reverse();
  // join arr to string, string to int
  let result = parseInt(arr.join(""));
  // return with sign
  result *= Math.sign(n);
  return result;
}

module.exports = reverseInt;
