// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // split string to arr
  let arr = str.split("");

  // // reverse arr order
  // arr.reverse();

  // // arr to string
  // return arr.join("");


  // add current char at the beginning of str
  return arr.reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;
