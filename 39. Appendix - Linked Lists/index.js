const basket = ['apples', 'grapes', 'pears'];
// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//          8742 --> pears
//                    372 --> null

// Why linked lists?
// 1. Arrays are slow for insertion and deletion
// 2. Linked lists are fast for insertion and deletion

// What is Pointer?
// A reference to another place in memory
let obj1 = { a: true };
let obj2 = obj1; // obj2 is a pointer to obj1
obj1.a = 'booya';
delete obj1;
console.log('1', obj1);
console.log('2', obj2);

// Garbage Collection
// When you delete an object, the memory is freed up
// JavaScript has a garbage collector that automatically deletes objects
// If you have a circular reference, the garbage collector will not delete the objects
// You need to manually delete the circular reference

// Doubly Linked List
// A linked list that has a pointer to the previous node
// It allows you to traverse the list in both directions
// It is slower than a singly linked list because you have to keep track of the previous node

// Single vs Doubly Linked List
// 1. Single Linked List
// - Simple implementation
// - Less memory - Why? Because you don't have to store the previous node
// - Faster - Why? Because you don't have to keep track of the previous node
// 2. Doubly Linked List
// - Can be traversed in both directions - Why? Because you have a pointer to the previous node
// - More memory - Why? Because you have to store the previous node as well
// - Slower because you have to keep track of the previous node - Why? Because you have to update the previous node when you insert or delete a node

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head; // The head and the tail are the same because there is only one node
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode; // The next node of the tail is the new node
    this.tail = newNode; // The new node is the tail
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null
    };

    const leader = this.traverseToIndex(index - 1); // The node before the index
    const holdingPointer = leader.next; // The node at the index
    leader.next = newNode; // The new node is the next node of the leader
    newNode.next = holdingPointer; // The next node of the new node is the holding pointer
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1); // The node before the index
    const unwantedNode = leader.next; // The node at the index
    leader.next = unwantedNode.next; // The next node of the leader is the next node of the unwanted node
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const linkedList = new LinkedList(10);