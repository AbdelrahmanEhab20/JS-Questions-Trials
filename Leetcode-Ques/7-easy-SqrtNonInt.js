var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 1,
    right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSquared = mid * mid;

    if (midSquared === x) {
      return mid;
    } else if (midSquared < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 'right' will be the integer part of the square root when the loop exits
  return right;
};
// Example usage:
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(12));
