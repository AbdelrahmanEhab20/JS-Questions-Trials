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
const arr = [1, 2, 3, 2, 1, 3, 1, 4, 2];
const occurrences = countOccurrences(arr);
console.log(occurrences);
