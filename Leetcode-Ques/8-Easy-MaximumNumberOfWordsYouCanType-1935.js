// 1935. Maximum Number of Words You Can Type
// Time: O(n), Space: O(1) since brokenLetters <= 26

function canBeTypedWords(text, brokenLetters) {
  const words = text.split(" ");
  if (brokenLetters.length === 0) return words.length;

  const broken = new Set(brokenLetters);
  return words.filter((word) => {
    for (const ch of word) {
      if (broken.has(ch)) return false;
    }
    return true;
  }).length;
}

// Examples
console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0

module.exports = { canBeTypedWords };
