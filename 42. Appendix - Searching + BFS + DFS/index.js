class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        // Go left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // Go right (duplicates are inserted on the right)
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Search for a value in the BST
  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        // Found the value
        return currentNode;
      }
    }
    return false;
  }

  // Remove a value from the BST
  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // We have found the node to remove

        // Case 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            // Removing the root node
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
          }
        }
        // Case 2: Right child that has no left child
        else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }
        }
        // Case 3: Right child that has a left child
        else {
          // Find the leftmost node in the right subtree
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          // Replace current node with leftmost node
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
    return false;
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);

//       9
//   4       20
// 1   6   15  170

function traverse(node) {
  const tree = { value: node.value };
  console.log(tree)
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

console.log("Traverse", JSON.stringify(traverse(tree.root)));

// BFS: [9, 4, 20, 1, 6, 15, 170]
// DFS (InOrder): [1, 4, 6, 9, 15, 20, 170]
// DFS (PreOrder): [9, 4, 1, 6, 20, 15, 170]
// DFS (PostOrder): [1, 6, 4, 15, 170, 20, 9]

// BFS vs DFS, When to use one over the other?
// Time complexity is the same for both, but space complexity is different, O(n) for both, but BFS uses more memory than DFS so its space complexity is O(w) where w is the maximum width of the tree, while DFS space complexity is O(h) where h is the maximum height of the tree
// BFS uses more memory as it has to keep track of all the nodes at each level
// DFS uses less memory as it only has to keep track of the nodes in the current branch
// Use BFS when you want to find the shortest path
// Use DFS when you want to visit every node in the tree

// If you know a solution is not far from the root of the tree: BFS (DFS will take too long)
// If the tree is very deep and solutions are rare: BFS (DFS will take too long)
// If the tree is very wide: DFS (BFS will need too much memory)
// If solutions are frequent but located deep in the tree: DFS
// Determining whether a path exists between two nodes: DFS
// Finding the shortest path: BFS

// Breadth-first search (BFS): level order traversal.
function breadFirstSearch(root) {
  const result = [];
  if (!root) return result;
  // console.log('Root', root);
  const queue = [root];
  // console.log('Queue', queue)
  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the next node.
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

// Depth-first search In-Order: left subtree, node, right subtree.
function depthFirstSearchInOrder(root, result = []) {
  if (!root) return result;
  depthFirstSearchInOrder(root.left, result);
  result.push(root.value);
  depthFirstSearchInOrder(root.right, result);
  return result;
}

// Depth-first search Pre-Order: node, left subtree, right subtree.
function depthFirstSearchPreOrder(root, result = []) {
  if (!root) return result;
  result.push(root.value);
  depthFirstSearchPreOrder(root.left, result);
  depthFirstSearchPreOrder(root.right, result);
  return result;
}

// Depth-first search Post-Order: left subtree, right subtree, node.
function depthFirstSearchPostOrder(root, result = []) {
  if (!root) return result;
  depthFirstSearchPostOrder(root.left, result);
  depthFirstSearchPostOrder(root.right, result);
  result.push(root.value);
  return result;
}

console.log('BFS', breadFirstSearch(tree.root)); // [9, 4, 20, 1, 6, 15, 170]
console.log('DFS InOrder', depthFirstSearchInOrder(tree.root)); // [1, 4, 6, 9, 15, 20, 170]
console.log('DFS PreOrder', depthFirstSearchPreOrder(tree.root)); // [9, 4, 1, 6, 20, 15, 170]
console.log('DFS PostOrder', depthFirstSearchPostOrder(tree.root)); // [1, 6, 4, 15, 170, 20, 9]