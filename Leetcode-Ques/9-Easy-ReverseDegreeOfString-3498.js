// 3498. Reverse Degree of a String
// Time: O(n), Space: O(1)

function reverseDegree(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const chCode = s.charCodeAt(i) - 97; // 'a' -> 0, 'z' -> 25
    const reversedAlphabetIndex = 26 - chCode; // 'a' -> 26, 'z' -> 1
    const positionInString = i + 1; // 1-indexed
    total += reversedAlphabetIndex * positionInString;
  }
  return total;
}

// Examples
console.log(reverseDegree("abc")); // 148
console.log(reverseDegree("zaza")); // 160

module.exports = { reverseDegree };
