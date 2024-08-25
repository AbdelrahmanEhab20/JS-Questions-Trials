// ! 238. Product of Array Except Self
// ? https://leetcode.com/problems/product-of-array-except-self/description/
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  // Calculate prefix products
  let prefixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefixProduct;
    prefixProduct *= nums[i];
  }
  // Calculate suffix products and multiply with prefix products
  let suffixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }
  return result;
};
let testCase = productExceptSelf([1, 2, 3, 4]);
console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" -----------------------------");
