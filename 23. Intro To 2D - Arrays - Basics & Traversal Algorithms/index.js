// directions array: up, right, down, left
const directions = [[-1, 0],  // up
                     [0, 1],   // right
                     [1, 0],   // down
                     [0, -1]]; // left
/**
 * This function traverses a 2D matrix using depth-first search.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {number[][]} matrix
 * @returns {number[]}
 */
const traversalDFS = function (matrix) {
  const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
  console.log(seen);
  const values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
}

/**
 * This function performs a depth-first search on the matrix.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {number[][]} matrix
 * @param {number} row
 * @param {number} col
 * @param {boolean[][]} seen
 * @param {number[]} values
 * @returns {void}
 */
const dfs = function (matrix, row, col, seen, values) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
  values.push(matrix[row][col]);
  seen[row][col] = true;
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(traversalDFS(matrix1));
const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
console.log(traversalDFS(matrix2));
console.log('----------------------');

/**
 * This function traverses a 2D matrix using breadth-first search.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {number[][]} matrix
 * @returns {number[]}
 */
const traversalBFS = function (matrix) {
  const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  const queue = [[0, 0]];
  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
      continue;
    }
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }
  return values;
}

const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(traversalBFS(matrix3));
const matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(traversalBFS(matrix4));
