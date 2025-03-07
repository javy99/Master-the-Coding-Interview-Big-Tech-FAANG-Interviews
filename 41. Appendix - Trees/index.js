// Binary Tree - A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Binary Search Tree - A binary search tree, or BST, is a binary tree where the nodes are ordered in a specific way. All nodes are ordered based on the node's value. The nodes to the left of a particular node have a value less than the current node, and the nodes to the right of a particular node have a value greater than the current node.

/*
  Level 0: 2^0 = 1;
  Level 1: 2^1 = 2;
  Level 2: 2^2 = 4;
  Level 3: 2^3 = 8;
  Level h: 2^h nodes;

  # of nodes = 2^h - 1;
  log nodes = steps;

  log 100 = 2;
  10^2 = 100;
*/

// Balanced vs. Unbalanced Trees
// A balanced tree is a tree where the height of the left and right subtrees of any node differ by at most one. Example of a balanced tree:

//     1
//    / \
//   2   3
//  / \
// 4   5
// In this tree, the left and right subtrees of every node differ by at most one. This is a balanced tree.

// An unbalanced tree is a tree where this is not the case.

//   1
//    \
//     2
//      \
//       3
//        \
//         4
// In this tree, the right subtree of every node is much larger than the left subtree. This is an unbalanced tree.

// Trie = Prefix Tree
// A trie is a tree-like data structure whose nodes store the letters of an alphabet. By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree.
// Tries are commonly used to store entire dictionaries of words for quick lookups, as they have the property of sharing prefixes between words.

// Binary Tree
// Binary Tree Node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Simple Binary Tree with a pre-order traversal
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-order traversal: Node -> Left -> Right
  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.val);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}

// Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const tree = new BinaryTree(root);
tree.preOrder();  // Output: 1, 2, 4, 5, 3

console.log("=====================================");

// Binary Search Tree (BST)

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(val) {
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  search(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }
    return false;
  }

  // In-order traversal (Left -> Node -> Right) to print sorted values
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.val);
    this.inOrder(node.right);
  }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7));  // true
console.log(bst.search(12)); // false

bst.inOrder(); // Output: 3, 5, 7, 10, 15

console.log("=====================================");

// Trie (Prefix Tree)

// Trie Node
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Check if there is any word in the trie that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// Usage
const trie = new Trie();
trie.insert("hello");
trie.insert("helium");

console.log(trie.search("hello"));   // true
console.log(trie.search("hel"));     // false
console.log(trie.startsWith("hel")); // true
