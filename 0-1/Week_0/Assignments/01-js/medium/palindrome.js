/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // create a regex that looks for all non-alphabetical characters
  const regex = /[^A-Za-z]/g;
  // remove all non-alphabetical characters from the string and convert it to lowercase
  const newStr = str.toLowerCase().replace(regex, "");
  // now, check and see if the string is the same forwards and backwards
  const newStrReverse = newStr.split("").reverse().join("");
  return newStr === newStrReverse;
}

module.exports = isPalindrome;
