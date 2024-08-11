// ! https://leetcode.com/problems/length-of-last-word/description/
var lengthOfLastWord = function (s) {
  let stringTrimAndSplitted = s.trim().split(" ");
  console.log("stringTrimAndSplitted *****");
  console.log(stringTrimAndSplitted);
  let lastWordLength =
    stringTrimAndSplitted[stringTrimAndSplitted.length - 1].length;
  return lastWordLength;
};
let testCase = lengthOfLastWord("   fly me   to   the moon  ");
console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" ------------------");
