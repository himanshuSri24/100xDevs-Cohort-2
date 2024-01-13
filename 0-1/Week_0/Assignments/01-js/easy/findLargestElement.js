/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // using inbuild method: spread the array, and use Math.max
  // returning undefined if array is empty
  return numbers.length > 0 ? Math.max(...numbers) : undefined;
}

module.exports = findLargestElement;
