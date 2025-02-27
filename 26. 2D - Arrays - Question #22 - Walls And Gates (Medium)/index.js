// directions array: up, right, down, left
const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];
const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;

/**
 * This function will fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
 * Our solution's time complexity is O(n) where n is the number of cells in the grid. We visit each cell at most once.
 * Our solution's space complexity is O(n) where n is the number of cells in the grid. In the worst case, the call stack will contain all the cells in the grid.
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
const wallsAndGates = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === GATE) {
        dfs(matrix, row, col, 0);
      }
    }
  }
  return matrix;
};

/**
 * This function will recursively visit each cell in the matrix and update the value of the cell with the currentStep if the currentStep is less than the value of the cell.
 * Our solution's time complexity is O(n) where n is the number of cells in the grid. We visit each cell at most once.
 * Our solution's space complexity is O(n) where n is the number of cells in the grid. In the worst case, the call stack will contain all the cells in the grid.
 * @param {number[][]} matrix
 * @param {number} row
 * @param {number} col
 * @param {number} currentStep
 * @returns {void}
 */
const dfs = function (matrix, row, col, currentStep) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    currentStep > matrix[row][col]
  ) {
    return;
  }
  matrix[row][col] = currentStep;
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], currentStep + 1);
  }
};

const matrix1 = [
  [EMPTY, WALL, GATE, EMPTY],
  [EMPTY, EMPTY, EMPTY, WALL],
  [EMPTY, WALL, EMPTY, WALL],
  [GATE, WALL, EMPTY, EMPTY],
];
console.log(wallsAndGates(matrix1));
const matrix2 = [
  [EMPTY, WALL, GATE, EMPTY],
  [WALL, EMPTY, EMPTY, WALL],
  [EMPTY, WALL, EMPTY, WALL],
  [GATE, WALL, EMPTY, EMPTY],
];
console.log(wallsAndGates(matrix2));
const matrix3 = [];
console.log(wallsAndGates(matrix3));
const matrix4 = [[]];
console.log(wallsAndGates(matrix4));
