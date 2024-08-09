// ! https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
  if ([...new Set(nums)].length == nums.length) {
    return false;
  } else {
    return true;
  }
};
// let testCase = containsDuplicate([1, 2, 3, 1]);
let testCase = containsDuplicate([1, 2, 3]);
console.log(testCase);
