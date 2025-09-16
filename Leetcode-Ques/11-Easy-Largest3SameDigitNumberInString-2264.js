// 2264. Largest 3-Same-Digit Number in String
// Time: O(n), Space: O(1)

function largestGoodInteger(num) {
  let best = -1; // track digit 0..9, -1 if none
  for (let i = 0; i + 2 < num.length; i++) {
    const a = num[i];
    if (a === num[i + 1] && a === num[i + 2]) {
      const digit = a.charCodeAt(0) - 48; // '0' -> 0
      if (digit > best) best = digit;
    }
  }
  return best === -1 ? "" : String(best).repeat(3);
}

// Examples
console.log(largestGoodInteger("6777133339")); // "777"
console.log(largestGoodInteger("2300019")); // "000"
console.log(largestGoodInteger("42352338")); // ""

module.exports = { largestGoodInteger };
