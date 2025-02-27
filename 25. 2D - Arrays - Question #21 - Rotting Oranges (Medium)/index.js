// directions array: up, right, down, left
const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];
const ROTTEN = 2;
const FRESH  = 1;
const EMPTY  = 0;

/**
 * This function will return the number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * Our solution's time complexity is O(n) where n is the number of cells in the grid. We visit each cell at most once.
 * Our solution's space complexity is O(n) where n is the number of cells in the grid. In the worst case, the queue will contain all the cells in the grid.
 * @param {number[][]} matrix
 * @returns {number}
 */
const orangesRotting = function (matrix) {
  if (matrix.length === 0) return 0;
  const queue = [];
  let freshOranges = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]);
      }
      if (matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }
  let currentQueueSize = queue.length;
  let minutes = 0;
  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      minutes++;
      currentQueueSize = queue.length;
    }
    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = currentDir[0] + row;
      const nextCol = currentDir[1] + col;
      if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
        continue;
      }
      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  if (freshOranges > 0) {
    return - 1;
  }
  return minutes;
}

const matrix1 = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];
console.log(orangesRotting(matrix1));
const matrix2 = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1],
];
console.log(orangesRotting(matrix2));
const matrix3 = [];
console.log(orangesRotting(matrix3));
const matrix4 = [[], []];
console.log(orangesRotting(matrix4));