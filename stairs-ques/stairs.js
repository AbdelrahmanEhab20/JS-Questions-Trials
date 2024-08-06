// ! Dynamic Programming trial
// ? Question ?____
// TODO: We have a staircase with a certain number of steps, say 4 steps,
// TODO: and you are allowed to ascend either one or two steps at a time.
// TODO: How many different ways are there to reach the top of the staircase?
// * ### ANSWER ###
// we have options so we need to achieve a tree solution to reach to the right answer
const x = 50;
const numberOfSteps = [1, 2, 3];
console.log(num_of_ways(x, numberOfSteps));

function num_of_ways(n, steps, memo = {}) {
  if (n in memo) return memo[n];
  if (n == 0) return 1;
  if (n < 0) return 0;

  let total = 0;
  for (const oneStep of steps) {
    total += num_of_ways(n - oneStep, steps, memo);
  }
  memo[n] = total;
  console.log(memo);
  return total;
}
// ! OPTIMIZED Solution -- DP - Dynamic programming
// ? using memo to save the n and check if it's already existed and so on to reach the solution faster and not go with
// ? the un needed trials
