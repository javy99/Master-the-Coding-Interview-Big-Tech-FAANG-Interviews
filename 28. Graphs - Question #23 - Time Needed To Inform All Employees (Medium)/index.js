/** This function will return the time needed to inform all employees, given the number of employees, the head of the company, the managers of each employee, and the time it takes to inform each employee.
 * Our solution's time complexity is O(n) where n is the number of employees.
 * Our solution's space complexity is O(n) where n is the number of employees.
 * @param {number} n
 * @param {number} headID
 * @param {number[]} managers
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, managers, informTime) {
  const adjList = managers.map(() => []);
  for (let e = 0; e < n; e++) {
    const manager = managers[e];
    if (manager === -1) continue;
    adjList[manager].push(e);
  }
  return dfs(headID, adjList, informTime);
};

/**
 * This function does a depth-first search to find the maximum time needed to inform all employees.
 * Our solution's time complexity is O(n) where n is the number of employees.
 * Our solution's space complexity is O(n) where n is the number of employees.
 * @param {number} currentId
 * @param {number[][]} adjList
 * @param {number[]} informTime
 * @returns {number}
 */
const dfs = function (currentId, adjList, informTime) {
  if (adjList[currentId].length === 0) {
    return 0;
  }
  let max = 0;
  const subordinates = adjList[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  return max + informTime[currentId];
}

const n1 = 8;
const headID1 = 4;
const managers1 = [2, 2, 4, 6, -1, 4, 4, 5];
const informTime1 = [0, 0, 4, 0, 7, 3, 6, 0];
console.log(numOfMinutes(n1, headID1, managers1, informTime1)); // 13

const n2 = 1;
const headID2 = 0;
const managers2 = [-1];
const informTime2 = [0];
console.log(numOfMinutes(n2, headID2, managers2, informTime2)); // 0

const n3 = 7;
const headID3 = 6;
const managers3 = [1, 2, 3, 4, 5, 6, -1];
const informTime3 = [0, 6, 5, 4, 3, 2, 1];
console.log(numOfMinutes(n3, headID3, managers3, informTime3)); // 21
