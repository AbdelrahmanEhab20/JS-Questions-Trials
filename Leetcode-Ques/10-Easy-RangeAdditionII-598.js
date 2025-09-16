// 598. Range Addition II
// Time: O(k) where k = ops.length, Space: O(1)

function maxCount(m, n, ops) {
  if (!ops || ops.length === 0) return m * n;

  let minA = m;
  let minB = n;
  for (const [a, b] of ops) {
    if (a < minA) minA = a;
    if (b < minB) minB = b;
  }
  return minA * minB;
}

// Examples
console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
  ])
); // 4
console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ])
); // 4
console.log(maxCount(3, 3, [])); // 9

module.exports = { maxCount };
