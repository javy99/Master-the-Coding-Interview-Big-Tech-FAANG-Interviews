/**
 * This function calculates the minimum cost to reach the top of the floor. The cost of each step is stored in the cost array. We use here a recursive approach. We calculate the minimum cost to reach the ith step by adding the cost of the ith step and the minimum cost to reach the i-1th step and the i-2th step. We return the minimum cost to reach the top of the floor by taking the minimum of the minimum cost to reach the n-1th step and the n-2th step.
 * Our solution's time complexity is O(2^n) because we are making 2 recursive calls at each step.
 * Our solution's space complexity is O(2^n) because we are making 2 recursive calls at each step.
 * @param {number[]} cost
 * @returns {number}
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
}

/**
 * This function is a helper function for minCostClimbingStairs function. It calculates the minimum cost to reach the ith step.
 * Our solution's time complexity is O(2^n) because we are making 2 recursive calls at each step.
 * Our solution's space complexity is O(2^n) because we are making 2 recursive calls at each step.
 * @param {number} i
 * @param {number[]} cost
 * @returns {number}
 */
const minCost = function (i, cost) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
}

/**
 * This function calculates the minimum cost to reach the top of the floor. The cost of each step is stored in the cost array. We use here a dynamic programming approach (Top Down Approach). We calculate the minimum cost to reach the ith step by adding the cost of the ith step and the minimum cost to reach the i-1th step and the i-2th step. We return the minimum cost to reach the top of the floor by taking the minimum of the minimum cost to reach the n-1th step and the n-2th step.
 * Our solution's time complexity is O(n) because we are using memoization to store the results of the sub-problems.
 * Our solution's space complexity is O(n) because we are using memoization to store the results of the sub-problems.
 * @param {number[]} cost
 * @returns {number}
 */
const minCostClimbingStairsDPTopDown = function (cost) {
  const n = cost.length;
  const dp = [];
  return Math.min(
    minCostDPTopDown(n - 1, cost, dp),
    minCostDPTopDown(n - 2, cost, dp)
  );
}

/**
 * This function is a helper function for minCostClimbingStairsDPTopDown function. It calculates the minimum cost to reach the ith step.
 * Our solution's time complexity is O(n) because we are using memoization to store the results of the sub-problems.
 * Our solution's space complexity is O(n) because we are using memoization to store the results of the sub-problems.
 * @param {number} i
 * @param {number[]} cost
 * @param {number[]} dp
 * @returns {number}
 */
const minCostDPTopDown = function (i, cost, dp) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];
  if (dp[i] !== undefined) return dp[i];
  dp[i] =
    cost[i] +
    Math.min(
      minCostDPTopDown(i - 1, cost, dp),
      minCostDPTopDown(i - 2, cost, dp)
    );
  return dp[i];
}

/**
 * This function calculates the minimum cost to reach the top of the floor. The cost of each step is stored in the cost array. We use here a dynamic programming approach (Bottom Up Approach). We calculate the minimum cost to reach the ith step by adding the cost of the ith step and the minimum cost to reach the i-1th step and the i-2th step. We return the minimum cost to reach the top of the floor by taking the minimum of the minimum cost to reach the n-1th step and the n-2th step.
 * Our solution's time complexity is O(n) because we are using a bottom-up approach to solve the problem.
 * Our solution's space complexity is O(n) because we are using a bottom-up approach to solve the problem.
 * @param {number[]} cost
 * @returns {number}
 */
const minCostClimbingStairsDPBottomUp = function (cost) {
  const dp = [];
  const n = cost.length;
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dp[i] = cost[i];
    } else {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i -2]);
    }
  }
  return Math.min(dp[n - 1], dp[n - 2]);
}

/**
 * This function calculates the minimum cost to reach the top of the floor. The cost of each step is stored in the cost array. We use here a dynamic programming approach (Bottom Up Approach). We calculate the minimum cost to reach the ith step by adding the cost of the ith step and the minimum cost to reach the i-1th step and the i-2th step. We return the minimum cost to reach the top of the floor by taking the minimum of the minimum cost to reach the n-1th step and the n-2th step.
 * Our solution's time complexity is O(n) because we are using a bottom-up approach to solve the problem.
 * Our solution's space complexity is O(1) because we are using a bottom-up approach to solve the problem.
 * @param {number[]} cost
 * @returns {number}
 */
const minCostClimbingStairsDPBottomUpConstantTime = function (cost) {
  const n = cost.length
  if (n === 0) return 0;
  if (n === 1) return cost[0];
  let dpOne = cost[0];
  let dpTwo = cost[1];
  for (let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }
  return Math.min(dpOne, dpTwo);
}

const cost1 = [20, 15, 30];
console.log(minCostClimbingStairs(cost1));
console.log(minCostClimbingStairsDPTopDown(cost1));
console.log(minCostClimbingStairsDPBottomUp(cost1));
console.log(minCostClimbingStairsDPBottomUpConstantTime(cost1));
console.log("-----------------");
const cost2 = [10, 15, 30];
console.log(minCostClimbingStairs(cost2));
console.log(minCostClimbingStairsDPTopDown(cost2));
console.log(minCostClimbingStairsDPBottomUp(cost2));
console.log(minCostClimbingStairsDPBottomUpConstantTime(cost2));
console.log("-----------------");
const cost3 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost3));
console.log(minCostClimbingStairsDPTopDown(cost3));
console.log(minCostClimbingStairsDPBottomUp(cost3));
console.log(minCostClimbingStairsDPBottomUpConstantTime(cost3));
console.log("-----------------");
const cost4 = [0, 0, 1, 1];
console.log(minCostClimbingStairs(cost4));
console.log(minCostClimbingStairsDPTopDown(cost4));
console.log(minCostClimbingStairsDPBottomUp(cost4));
console.log(minCostClimbingStairsDPBottomUpConstantTime(cost4));
console.log("-----------------");