// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function (nums, target) {
  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([3, 2, 3], 6)); // [0, 2]
