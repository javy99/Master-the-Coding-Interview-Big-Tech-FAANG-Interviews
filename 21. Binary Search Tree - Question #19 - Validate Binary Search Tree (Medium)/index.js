// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * This function determines if the given binary tree is a valid binary search tree.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {TreeNode} root
 * @returns {boolean}
 */
const  isValidBST = function (root) {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);
};

/**
 * This function performs a depth-first search on the tree.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {TreeNode} node
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const dfs = function (node, min, max) {
  if (node.val <= min || node.val >= max) {
    return false;
  }
  if (node.left) {
    if (!dfs(node.left, min, node.val)) {
      return false;
    }
  }
  if (node.right) {
    if (!dfs(node.right, node.val, max)) {
      return false;
    }
  }
  return true;
}

const tree1 = new TreeNode(12, new TreeNode(7, new TreeNode(5), new TreeNode(9)), new TreeNode(18, new TreeNode(16), new TreeNode(25)));
console.log(isValidBST(tree1));
const tree2 = null;
console.log(isValidBST(tree2));
const tree3 = new TreeNode(10);
console.log(isValidBST(tree3));
const tree4 = new TreeNode(15, new TreeNode(12, new TreeNode(10), new TreeNode(14)), new TreeNode(18, new TreeNode(13), new TreeNode(20)));
console.log(isValidBST(tree4));
const tree5 = new TreeNode(12, new TreeNode(15), new TreeNode(17));
console.log(isValidBST(tree5));
const tree6 = new TreeNode(13, new TreeNode(9), new TreeNode(10));
console.log(isValidBST(tree6));
const tree7 = new TreeNode(15, new TreeNode(12, new TreeNode(10), new TreeNode(16)), new TreeNode(17, new TreeNode(16), new TreeNode(18)));
console.log(isValidBST(tree7));