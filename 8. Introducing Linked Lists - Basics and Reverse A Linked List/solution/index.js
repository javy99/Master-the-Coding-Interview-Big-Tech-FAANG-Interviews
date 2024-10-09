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
 * This function reverses the given linked list.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {ListNode} head
 * @returns {ListNode} - The reversed linked list.
 */
const reverseLinkedList = function (head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseLinkedList(head1));

let head2 = new ListNode(3);
console.log(reverseLinkedList(head2));

let head3 = new ListNode(null);
console.log(reverseLinkedList(head3));