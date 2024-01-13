/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/**
 * Checks if two strings are anagrams.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} Returns true if the strings are anagrams, false otherwise.
 */
function isAnagram(str1, str2) {
  // convert strings to lowercase, split them into arrays, sort them, and join them back into strings
  // then compare the strings
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

module.exports = isAnagram;
