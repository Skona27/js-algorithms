// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let result = [];
  let tempArr = [];

  array.forEach((el, i) => {
    // if index is divisible by arrSize, then it should go to new array
    if(i && i % size === 0) {
      // push current tempArr
      result.push(tempArr);
      // clear tempArr
      tempArr = [];
    } 
      // push element to tempArr
      tempArr.push(el);
  });

  // beforeend, push last tempArr and return
  result.push(tempArr);
  return result;
}

module.exports = chunk;
