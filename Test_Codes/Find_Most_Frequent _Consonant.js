// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/?envType=daily-question&envId=2025-09-13
// OPTIMAL SOLUTION - Single pass with dynamic counting
var mostFrequentVowelAndConsonant = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const vowelCount = {};
  const consonantCount = {};
  let maxVowel = 0;
  let maxConsonant = 0;

  // Single pass through the string
  for (let char of s) {
    if (vowels.has(char)) {
      vowelCount[char] = (vowelCount[char] || 0) + 1;
      maxVowel = Math.max(maxVowel, vowelCount[char]);
    } else {
      consonantCount[char] = (consonantCount[char] || 0) + 1;
      maxConsonant = Math.max(maxConsonant, consonantCount[char]);
    }
  }

  return maxVowel + maxConsonant;
};

// ALTERNATIVE: Even more concise version
var mostFrequentVowelAndConsonantV2 = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const counts = { vowels: {}, consonants: {} };
  let maxVowel = 0;
  let maxConsonant = 0;

  for (let char of s) {
    const isVowel = vowels.has(char);
    const category = isVowel ? "vowels" : "consonants";
    counts[category][char] = (counts[category][char] || 0) + 1;

    if (isVowel) {
      maxVowel = Math.max(maxVowel, counts[category][char]);
    } else {
      maxConsonant = Math.max(maxConsonant, counts[category][char]);
    }
  }

  return maxVowel + maxConsonant;
};

let testCase = mostFrequentVowelAndConsonant("successes");
let testCaseV2 = mostFrequentVowelAndConsonantV2("successes");
console.log(testCase);
console.log(testCaseV2);
