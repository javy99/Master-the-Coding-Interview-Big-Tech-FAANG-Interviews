/**
 * Definition for singly-linked list.
 * @param { number } val
 * @param { ListNode } next
 * @return { void }
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

/**
 * This function detects a cycle in a singly-linked list and returns the node where the cycle begins.
 * If no cycle exists, it returns null.
 * The time complexity is O(n), where n is the number of nodes in the linked list.
 * The space complexity is O(n) because we use a Set to store visited nodes.
 *
 * @param { ListNode | null } head
 * @returns { ListNode | null }
 */
/*
function detectCycle(head) {
  let currentNode = head;
  const seenNodes = new Set(); // Set to keep track of visited nodes

  while (currentNode !== null) {
    if (seenNodes.has(currentNode)) {
      return currentNode; // Cycle detected, return the node where the cycle starts
    }
    seenNodes.add(currentNode); // Mark the node as visited
    currentNode = currentNode.next; // Move to the next node
  }

  return null; // No cycle detected
}
  */

/**
 * This function detects a cycle in a singly-linked list and returns the node where the cycle begins.
 * If no cycle exists, it returns null.
 * The time complexity is O(n) and the space complexity is O(1).
 *
 * @param { ListNode | null } head
 * @returns { ListNode | null }
 */
function detectCycle(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  // Detect if a cycle exists
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow by 1 step
    fast = fast.next.next; // Move fast by 2 steps
    if (slow === fast) {
      // Cycle detected
      // Reset one pointer to the head
      let pointer = head;
      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next; // Both move at the same pace
      }
      return pointer; // Both meet at the start of the cycle
    }
  }

  // No cycle detected
  return null;
}

// Helper function to create a linked list with a cycle for testing
function createCyclicList(values, cycleIndex) {
  let head = new ListNode(values[0], null);
  let current = head;
  let cycleNode = null;
  for (let i = 1; i < values.length; i++) {
    const newNode = new ListNode(values[i], null);
    current.next = newNode;
    current = newNode;
    if (i === cycleIndex) {
      cycleNode = newNode; // Save the node where the cycle should begin
    }
  }
  if (cycleNode !== null) {
    current.next = cycleNode; // Create the cycle
  }
  return head;
}

// Helper function to print the linked list
function printList(head) {
  let current = head;
  const result = [];
  const seen = new Set(); // To avoid infinite loop in case of a cycle
  while (current !== null && !seen.has(current)) {
    result.push(current.val);
    seen.add(current);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

let head = createCyclicList([1, 2, 3, 4, 5], 2); // Create a list with a cycle at index 2
let cycleNode = detectCycle(head);

if (cycleNode) {
  console.log("Cycle detected at node with value:", cycleNode.val);
} else {
  console.log("No cycle detected.");
}
