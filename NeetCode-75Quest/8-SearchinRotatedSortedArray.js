var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the target
        if (nums[mid] === target) {
            return mid;
        }

        // Determine which part is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                // Target is in the left half
                right = mid - 1;
            } else {
                // Target is in the right half
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                // Target is in the right half
                left = mid + 1;
            } else {
                // Target is in the left half
                right = mid - 1;
            }
        }
    }

    // Target not found
    return -1;
};

// Example Usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
