// https://leetcode.com/problems/two-sum/description/
// ! This approach has a time complexity of 𝑂(𝑛2)
// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return { indices: [i, j], numbers: [numbers[i], numbers[j]] };
//       }
//     }
//   }
// };

//This approach has a time complexity of 𝑂(𝑛)
// Hashmap methodology
var twoSum = function (numbers, target) {
  const numIndices = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }
    numIndices[numbers[i]] = i;
  }
};
let testFunction = twoSum([2, 8, 11, 7], 9);
console.log(testFunction);
