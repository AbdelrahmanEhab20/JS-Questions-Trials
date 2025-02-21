function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // If mid element is greater than the last element, the min is in the right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Otherwise, the min is in the left half (including mid)
      right = mid;
    }
  }
  // At the end of the loop, left == right
  return nums[left];
}

// Example Usage:
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
