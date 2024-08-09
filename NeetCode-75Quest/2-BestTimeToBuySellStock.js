// * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/\

// ? Two Pointers solution ⤵️⤵️⤵️⤵️⤵️

function maxProfit(prices) {
  let left = 0; /// buy value
  let right = 1; /// sell value
  let FinalRightValid = 0;
  let finalProfit = 0; // will be calculated
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let newProf = prices[right] - prices[left];
      FinalRightValid = right;
      // compare which profit bigger
      finalProfit = Math.max(newProf, finalProfit);
    } else {
      left = right;
    }
    right++;
  }
  return finalProfit;
}

// ! DP solution ⤵️⤵️⤵️⤵️⤵️

// var maxProfit = function (prices) {
//   let buyPrice = prices[0];
//   prices[0] = 0;
//   let finalProfit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (buyPrice > prices[i]) {
//       buyPrice = prices[i];
//       prices[i] = 0;
//     } else {
//       finalProfit = Math.max(prices[i] - buyPrice, finalProfit);
//     }
//   }
//   return finalProfit;
// };
let testCase = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(testCase);
