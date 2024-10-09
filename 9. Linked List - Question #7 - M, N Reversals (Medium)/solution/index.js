/**
 * @param {number} val
 * @param {ListNode} next
 * @returns {ListNode} - A new instance of the ListNode class.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/** 
 * This function reverses the linked list from position left to position right, and returns the head of the reversed linked
 * The time complexity is O(n), where n is the number of nodes in the linked list, and the space complexity is O(1).
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode} - The head of the reversed linked list.
 */
const reverseBetween = function (head, left, right) {
    let currentPos = 1, currentNode = head, start = head;
    while (currentPos < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }
    let newList = null, tail = currentNode;
    while (currentPos >= left && currentPos <= right) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }
    start.next = newList;
    tail.next = currentNode;

    if (left > 1) {
        return head;
    } else {
        return newList;
    }
};


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

let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let result1 = reverseBetween(head1, 2, 4);
printList(result1);

let head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let result2 = reverseBetween(head2, 1, 5);
printList(result2);

let head3 = new ListNode(5);
let result3 = reverseBetween(head3, 1, 1);
printList(result3);

let head4 = new ListNode(null);
let result4 = reverseBetween(head4, 0, 0);
printList(result4);
