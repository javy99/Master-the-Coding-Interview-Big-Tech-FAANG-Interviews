// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * This function returns the level order traversal of the nodes' values in a binary tree as an array.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {TreeNode} root
 * @returns {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    let length = queue.length, count = 0;
    const currentLevelValues = [];
    while (count < length) {
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
}

const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(tree1)); // should return [[3], [9, 20], [15, 7]]
const tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(levelOrder(tree2)); // should return [[1], [2]]
const tree3 = null;
console.log(levelOrder(tree3)); // should return []