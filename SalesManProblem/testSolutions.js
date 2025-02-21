// Brute Force Solution for TSP
function tspBruteForce(graph) {
  const n = graph.length;
  const cities = Array.from({ length: n }, (_, i) => i);
  let minDistance = Infinity;
  let shortestPath = [];

  // Generate all permutations of the cities (excluding the first city as the starting point)
  function permute(arr, start) {
    if (start === arr.length - 1) {
      let distance = 0;
      let path = [arr[0]];

      // Calculate the total distance of the current path
      for (let i = 0; i < arr.length - 1; i++) {
        distance += graph[arr[i]][arr[i + 1]];
      }
      distance += graph[arr[arr.length - 1]][arr[0]]; // Returning to the starting city

      // Check if this is the shortest path
      if (distance < minDistance) {
        minDistance = distance;
        shortestPath = path.concat(arr.slice(1));
      }
    }

    // Swap cities and recursively permute
    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      permute(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack
    }
  }

  permute(cities, 1); // Start generating permutations
  return { minDistance, shortestPath };
}

// Test Case: A graph with 4 cities
const graph = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

const result = tspBruteForce(graph);
console.log("Brute Force - Shortest Path:", result.shortestPath);
console.log("Brute Force - Shortest Distance:", result.minDistance);
// Dynamic Programming Solution for TSP (Held-Karp Algorithm)
function tspHeldKarp(graph) {
  const n = graph.length;
  const memo = {};
  const visitedAll = (1 << n) - 1;

  // Recursively calculate the shortest path using dynamic programming
  function visit(city, visitedMask) {
    if (visitedMask === visitedAll) {
      return graph[city][0] || Infinity; // Return to the starting city
    }

    if (memo[visitedMask] && memo[visitedMask][city] !== undefined) {
      return memo[visitedMask][city];
    }

    let minDist = Infinity;
    for (let nextCity = 0; nextCity < n; nextCity++) {
      if ((visitedMask & (1 << nextCity)) === 0 && graph[city][nextCity]) {
        const newDist =
          graph[city][nextCity] +
          visit(nextCity, visitedMask | (1 << nextCity));
        minDist = Math.min(minDist, newDist);
      }
    }

    if (!memo[visitedMask]) memo[visitedMask] = {};
    memo[visitedMask][city] = minDist;
    return minDist;
  }

  return visit(0, 1); // Start at city 0
}

// Test Case: A graph with 4 cities
const graphHeldKarp = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

const resultHeldKarp = tspHeldKarp(graphHeldKarp);
console.log("Held-Karp - Shortest Distance:", resultHeldKarp);
// Greedy Solution for TSP
function tspGreedy(graph) {
  const n = graph.length;
  let visited = Array(n).fill(false);
  let currentCity = 0;
  let totalDistance = 0;
  let path = [currentCity];
  visited[currentCity] = true;

  // Visit each city once by always choosing the nearest unvisited city
  for (let i = 1; i < n; i++) {
    let nearestCity = -1;
    let minDist = Infinity;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && graph[currentCity][j] < minDist) {
        nearestCity = j;
        minDist = graph[currentCity][j];
      }
    }

    visited[nearestCity] = true;
    totalDistance += minDist;
    currentCity = nearestCity;
    path.push(currentCity);
  }

  totalDistance += graph[currentCity][0]; // Return to the start city
  return { totalDistance, path };
}

// Test Case: A graph with 4 cities
const graphGreedy = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

const resultGreedy = tspGreedy(graphGreedy);
console.log("Greedy - Shortest Path:", resultGreedy.path);
console.log("Greedy - Shortest Distance:", resultGreedy.totalDistance);
