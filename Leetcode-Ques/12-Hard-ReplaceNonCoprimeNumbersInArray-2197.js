// 2197. Replace Non-Coprime Numbers in Array
// Approach: Monotonic stack merging with GCD/LCM
// Time: O(n * logV) due to gcd operations, Space: O(n)

function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function replaceNonCoprimes(nums) {
  const stack = [];
  for (const num of nums) {
    let current = num;
    while (stack.length > 0) {
      const g = gcd(stack[stack.length - 1], current);
      if (g === 1) break;
      current = lcm(stack.pop(), current);
    }
    stack.push(current);
  }
  return stack;
}

// Examples
console.log(replaceNonCoprimes([6, 4, 3, 2, 7, 6, 2])); // [12, 7, 6]
console.log(replaceNonCoprimes([2, 2, 1, 1, 3, 3, 3])); // [2, 1, 1, 3]

module.exports = { replaceNonCoprimes };
