// Example of counting occurrences using a HashMap
function countOccurrences(arr) {
  //   let counts = new Map();
  let counts = {};
  for (let element of arr) {
    // counts.set(element, counts.get(element) + 1 || 1);
    counts[element] = counts[element] + 1 || 1;
  }
  return counts;
}
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
// function removeDuplicates(arr) {
//   const uniqueElements = new Map();
//   for (const element of arr) {
//     uniqueElements.set(element, true);
//   }
//   return Array.from(uniqueElements.keys());
// }
const arr = [1, 2, 3, 2, 1, 3, 1, 4, 2];
const occurrences = countOccurrences(arr);
const removeDuplicatesTEst = removeDuplicates(arr);
console.log(occurrences);
console.log(removeDuplicatesTEst);
