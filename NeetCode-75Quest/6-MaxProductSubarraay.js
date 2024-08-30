// ! 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/description/

var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let result = nums[0];
  let currMin = nums[0];
  let currMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num < 0) {
      // Swap currMax and currMin when encountering a negative number
      [currMax, currMin] = [currMin, currMax];
    }

    currMax = Math.max(num, currMax * num);
    currMin = Math.min(num, currMin * num);

    result = Math.max(result, currMax);
  }

  return result;
};

// let testCase = maxProduct([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // ====>>> 960
// let testCase = maxProduct([-2, 0, -1]); // ====>>> 0
let testCase = maxProduct([2, 3, -2, 4]); // ====>>> 6

console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" -----------------------------");
