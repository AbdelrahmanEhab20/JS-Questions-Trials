// 53. Maximum Subarray
// ! https://leetcode.com/problems/maximum-subarray/description/  !
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};
let testCase = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" -----------------------------");
