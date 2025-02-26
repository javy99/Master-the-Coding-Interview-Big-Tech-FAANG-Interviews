// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * This function counts the number of nodes in a complete binary tree.
 * Our solution's time complexity is O(log^2(n)) and space complexity is O(1).
 * @param {TreeNode} root
 * @returns {number}
 */
const countNodes = function (root) {
  if (!root) return 0;
  const height = getTreeHeight(root);
  if (height === 0) return 1;
  const upperCount = Math.pow(2, height) - 1;
  let left = 0, right = upperCount;
  while (left < right) {
    let idxToFind = Math.ceil((left + right) / 2);
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }
  return upperCount + left + 1;
}

/**
 * This function returns the height of the tree.
 * Our solution's time complexity is O(log(n)) and space complexity is O(1).
 * @param {TreeNode} root
 * @returns {number}
 */
const getTreeHeight = function (root) {
  let height = 0;
  while (root.left !== null) {
    height++;
    root = root.left;
  }
  return height;
}

/**
 * This function checks if a node exists in the tree.
 * Our solution's time complexity is O(log(n)) and space complexity is O(1).
 * @param {number} idxToFind
 * @param {number} height
 * @param {TreeNode} node
 * @returns {boolean}
 */
const nodeExists = function (idxToFind, height, node) {
  let left = 0, right = Math.pow(2, height) - 1, count = 0;
  while (count < height) {
    let midOfNode = Math.ceil((left + right) / 2);
    if (idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }
  return node !== null;
}

const tree1 = new TreeNode(1)
console.log(countNodes(tree1));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(countNodes(tree2));
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), null));
console.log(countNodes(tree3));
