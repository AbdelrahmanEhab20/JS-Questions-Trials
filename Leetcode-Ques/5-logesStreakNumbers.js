var longestConsecutive = function (nums) {
  let sortedNums = new Set(nums);
  let longestStreak = 0;
  // Iterate over each number in the set.
  for (const num of sortedNums) {
    // Check if current number is the beginning of a sequence.
    if (!sortedNums.has(num - 1)) {
      let currentNum = num; // Starting number of the current sequence.
      let currentStreak = 1; // Initializing current streak length.
      // Incrementally check consecutive numbers.
      while (sortedNums.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      // Update the longest streak if current one is longer.
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  // Return the length of the longest consecutive sequence.
  return longestStreak;
};
// let testCase = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
let testCase = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" ----------------------");
