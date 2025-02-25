// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * This function returns an array of the values of the nodes you can see from the right side of the binary tree.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {TreeNode} root
 * @returns {number[]}
 */
const rightSideView = function (root) {
  const result = [];
  dfs(root, 0, result);
  return result;
}

/**
 * This function performs a depth-first search on the binary tree and returns the right side view of the tree.
 * Our solution's time complexity is O(n) and space complexity is O(n). 
 * @param {TreeNode} node 
 * @param {number} currentLevel 
 * @param {number[]} result 
 * @returns {void}
 */
const dfs = function (node, currentLevel, result) {
  if (!node) return;
  if (currentLevel >= result.length) {
    result.push(node.val);
  }
  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }
  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
}

const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, new TreeNode(7, new TreeNode(8, null, null), null)), new TreeNode(5, null, null)),
  new TreeNode(3, null, new TreeNode(6, null, null))
);
console.log(rightSideView(tree1)); // should return [1, 3, 6, 7, 8]
const tree2 = null;
console.log(rightSideView(tree2)); // should return []
const tree3 = new TreeNode(1, null, b=null);
console.log(rightSideView(tree3)); // should return [1]
