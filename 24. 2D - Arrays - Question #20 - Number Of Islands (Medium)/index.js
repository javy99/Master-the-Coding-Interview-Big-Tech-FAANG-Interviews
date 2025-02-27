// directions array: up, right, down, left
const directions = [[-1, 0],  // up
                     [0, 1],   // right
                     [1, 0],   // down
                     [0, -1]]; // left

/**
 * This function takes a matrix of 1s and 0s, where 1 represents land and 0 represents water. It returns the number of islands in the matrix. An island is a group of 1s that are connected horizontally or vertically.
 * We will use BFS to solve this problem. We will iterate through the matrix and whenever we find a 1, we will increment the island count and then we will perform BFS on the current cell. We will mark the current cell as 0 and then we will check all the 4 directions of the current cell. If we find a 1 in any of the 4 directions, we will add that cell to the queue. We will continue this process until the queue is empty. We will repeat this process for all the cells in the matrix. We will return the island count.
 * Our solution's time complexity is O(min(M, N)), where M is the number of rows and N is the number of columns in the matrix. In the worst case, we will visit all the cells of the matrix.
 * Our solution's space complexity is O(M * N), where M is the number of rows and N is the number of columns in the matrix. In the worst case, the queue will contain all the cells of the matrix.
 * @param {number[][]} matrix
 * @returns {number}
 */
const numberOfIslands = function (matrix) {
  if (matrix.length === 0) return 0;
  let islandCount = 0;
  const queue = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        islandCount++;
        queue.push([row, col]);
        while (queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];
          matrix[currentRow][currentCol] = 0;
          for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];
            if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
              continue;
            }
            if (matrix[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }
  return islandCount;
}

const matrix1 = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
];
console.log(numberOfIslands(matrix1));
const matrix2 = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];
console.log(numberOfIslands(matrix2));
const matrix3 = [];
console.log(numberOfIslands(matrix3));
const matrix4 = [[], []];
console.log(numberOfIslands(matrix4));

// This solution using BFS is more efficient than the solution using DFS. The time complexity of both solutions is the same, but the space complexity of the BFS solution is better than the space complexity of the DFS solution. The space complexity of the BFS solution is O(min(M, N)), where M is the number of rows and N is the number of columns in the matrix. The space complexity of the DFS solution is O(M * N), where M is the number of rows and N is the number of columns in the matrix. In the worst case, the queue will contain all the cells of the matrix. In the worst case, the call stack of the DFS solution will contain all the cells of the matrix. Therefore, the BFS solution is more efficient than the DFS solution.