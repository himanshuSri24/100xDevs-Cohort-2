/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  // create a variable to hold the sum
  let sum = 0;
  // create a variable to hold the start time
  const startTime = new Date();
  // loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // add i to the sum
    sum += i;
  }
  // create a variable to hold the end time
  const endTime = new Date();
  // return the difference between the end time and the start time
  return endTime - startTime;
}

console.log("Time for sum of 1-10: ", calculateTime(10));
console.log("Time for sum of 1-100", calculateTime(100));
console.log("Time for sum of 1-1000", calculateTime(1000));
console.log("Time for sum of 1-10000", calculateTime(10000));
console.log("Time for sum of 1-100000", calculateTime(100000));
console.log("Time for sum of 1-1000000", calculateTime(1000000));
console.log("Time for sum of 1-10000000", calculateTime(10000000));
