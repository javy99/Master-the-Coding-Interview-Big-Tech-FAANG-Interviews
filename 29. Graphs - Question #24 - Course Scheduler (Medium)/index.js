/**
 * This function returns whether it is possible to finish all courses. The function takes in the number of courses and a list of prerequisites. The prerequisites list is a list of pairs where the first element is the prerequisite course and the second element is the course that depends on the prerequisite course. The function returns true if it is possible to finish all courses and false otherwise.
 * Our solution's time complexity is 0(P + N^3) where P is the number of prerequisites and N is the number of courses. The space complexity is 0(N^2) where N is the number of courses.
 * @param {number} n
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
const canFinish = function (n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }
  for (let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;
      if (current === v) return false;
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }
  return true;
}

/**
 * This function is optimized solution to use Topological Sorting (Kahn's Algorithm using BFS) to solve the problem. Topological Sorting is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering. The function takes in the number of courses and a list of prerequisites. The prerequisites list is a list of pairs where the first element is the prerequisite course and the second element is the course that depends on the prerequisite course. The function returns true if it is possible to finish all courses and false otherwise.
 * Our solution's time complexity is 0(P + N) where P is the number of prerequisites and N is the number of courses. The space complexity is 0(N) where N is the number of courses
 * @param {number} n
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
const canFinishTopologicalSort = function (n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]);
  }
  const stack = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }
  let count = 0;
  while (stack.length) {
    const current = stack.pop();
    count++;
    const adjacent = adjList[current];
    for (let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  return count === n;
}

const n1 = 6;
const prerequisites1 = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]];
console.log(canFinish(n1, prerequisites1));
console.log(canFinishTopologicalSort(n1, prerequisites1));
const n2 = 7;
const prerequisites2 = [[0, 3], [1, 0], [2, 1], [4, 5], [6, 4], [5, 6]];
console.log(canFinish(n2, prerequisites2));
console.log(canFinishTopologicalSort(n2, prerequisites2));
const n3 = 0;
const prerequisites3 = [];
console.log(canFinish(n3, prerequisites3));
console.log(canFinishTopologicalSort(n3, prerequisites3));