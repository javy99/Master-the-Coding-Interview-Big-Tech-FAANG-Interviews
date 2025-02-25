// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * This function finds the maximum depth of a given binary tree.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {TreeNode} root
 * @returns {number}
 */
const maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * This function finds the maximum depth of a given binary tree.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {TreeNode} node
 * @param {number} currentDepth
 * @returns {number}
 */
const maxDepth1 = function (node, currentDepth) {
  if (!node) return currentDepth;
  currentDepth++;
  return Math.max(maxDepth1(node.left, currentDepth), maxDepth1(node.right, currentDepth));
}

// Test Cases
const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(tree1);
console.log(maxDepth(tree1, 0)); // should return 3
const tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(tree2, 0)); // should return 2
const tree3 = null;
console.log(maxDepth(tree3, 0)); // should return 0
const tree4 = new TreeNode(0);
console.log(maxDepth(tree4, 0)); // should return 1
console.log('----------------------------------');
const tree5 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth1(tree5, 0)); // should return 3
const tree6 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth1(tree6, 0)); // should return 2
const tree7 = null;
console.log(maxDepth1(tree7, 0)); // should return 0
const tree8 = new TreeNode(0);
console.log(maxDepth1(tree8, 0)); // should return 1