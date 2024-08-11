// ! https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/?envType=daily-question&envId=2024-08-11

var minDays = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Helper function to check if the grid is connected
  function isConnected() {
    let seen = new Set();

    // Find the first land cell to start DFS
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          // Perform DFS to count connected components
          const count = dfs(i, j, seen);
          return count !== grid.flat().filter((val) => val === 1).length;
        }
      }
    }

    return true; // No land, grid is already disconnected
  }

  // DFS function
  function dfs(i, j, seen) {
    let stack = [[i, j]];
    seen.add(`${i},${j}`);
    let count = 0;

    while (stack.length > 0) {
      const [ci, cj] = stack.pop();
      count++;

      for (const [di, dj] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ]) {
        const ni = ci + di;
        const nj = cj + dj;

        if (
          ni >= 0 &&
          ni < m &&
          nj >= 0 &&
          nj < n &&
          grid[ni][nj] === 1 &&
          !seen.has(`${ni},${nj}`)
        ) {
          seen.add(`${ni},${nj}`);
          stack.push([ni, nj]);
        }
      }
    }

    return count;
  }

  // Helper function to check if we can disconnect by removing one land cell
  function canDisconnect() {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          grid[i][j] = 0;
          if (isConnected()) {
            grid[i][j] = 1; // Revert the change
            return true;
          }
          grid[i][j] = 1; // Revert the change
        }
      }
    }
    return false;
  }

  // If grid is already disconnected
  if (isConnected()) {
    return 0;
  }

  // Check if we can disconnect by removing one land cell
  if (canDisconnect()) {
    return 1;
  }

  // Otherwise, two removals are enough
  return 2;
};
let grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
let testCase = minDays(grid);
console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" -----------------------------");
