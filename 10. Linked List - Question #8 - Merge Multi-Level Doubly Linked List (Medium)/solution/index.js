/**
 * 
 * @param { number } val
 * @param { ListNode } next
 * @param { ListNode } prev
 * @param { ListNode } child
 * @return { void }
 */
function ListNode(val, next, prev, child) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
}

/**
 * This function flattens the linked list and returns the head of the flattened linked list.
 * The time complexity is O(n), where n is the number of nodes in the linked list, and the space complexity is O(1).
 * @param { ListNode } head 
 * @returns { ListNode }
 */
const flatten = function (head) {
    if (!head) return head;
    let currentNode = head;
    while (currentNode !== null) {
        if (currentNode.child === null) {
            currentNode = currentNode.next;
        } else {
            let tail = currentNode.child;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = currentNode.next;
            if (tail.next !== null) {
                tail.next.prev = tail;
            }
            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }
    return head;
}


// Helper function to print the entire linked list
function printList(head) {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Constructing the multi-level doubly linked list manually based on your example
let node1 = new ListNode(1, null, null, null);
let node2 = new ListNode(2, null, null, null);
let node3 = new ListNode(3, null, null, null);
let node4 = new ListNode(4, null, null, null);
let node5 = new ListNode(5, null, null, null);
let node6 = new ListNode(6, null, null, null);

// Link the main list
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;
node5.next = node6;
node6.prev = node5;

// Child list for node 3
let node7 = new ListNode(7, null, null, null);
let node8 = new ListNode(8, null, null, null);
let node9 = new ListNode(9, null, null, null);
let node10 = new ListNode(10, null, null, null);
let node11 = new ListNode(11, null, null, null);

// Link the child nodes of node 3
node7.next = node8;
node8.prev = node7;
node8.next = node9;
node9.prev = node8;

node7.child = node10;
node10.next = node11;
node11.prev = node10;

// Child list for node 5
let node12 = new ListNode(12, null, null, null);
let node13 = new ListNode(13, null, null, null);

// Link the child nodes of node 5
node12.next = node13;
node13.prev = node12;

// Add child lists to the main nodes
node3.child = node7;
node5.child = node12;

// Print the original list
console.log("Original list:");
printList(node1);

// Flatten the list
let flattenedList = flatten(node1);

// Print the flattened list
console.log("Flattened list:");
printList(flattenedList);