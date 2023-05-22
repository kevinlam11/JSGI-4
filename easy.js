// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

function findAverage(num) {
  var total = 0;
  var count = 0;

  for (let i = 0; i < num.length; i++) {
    total += num[i];
    count++;
  }

  if (count === 0) {
    return 0;
  }

  let average = total / count;
  return average;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let average = findAverage(num);
console.log(average); // Output: 3
