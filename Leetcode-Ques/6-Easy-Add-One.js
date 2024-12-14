// function plusOne(digits) {
//   for (var i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   // If all digits are 9, we need an additional 1 at the start
//   digits.unshift(1);
//   return digits;
// }
// function testPlus(digits) {
//   let str = "";
//   for (let index = 0; index < digits.length; index++) {
//     const singleNum = digits[index];
//     str += singleNum;
//   }
//   let digitsAfterEdit = Number(str) + 1;
//   // Convert the result back to an array of digits
//   return String(digitsAfterEdit).split("").map(Number);
// }
var addBinary = function (a, b) {
  // Convert binary strings to BigInt integers
  const numA = BigInt("0b" + a);
  const numB = BigInt("0b" + b);

  // Add the two BigInt numbers
  const sum = numA + numB;

  // Convert the sum back to a binary string and remove the '0b' prefix
  return sum.toString(2);
};
// Example usage:
console.log(addBinary("2", "4")); // Output: [1,2,4]
console.log(addBinary("4", "6")); // Output: [4,3,2,2]
console.log(addBinary("3", "3")); // Output: [1,0]
