// Stacks

// google
// udemy.com
// youtube

// Arrays or Linked Lists can be used to implement Stacks
// Arrays are faster than Linked Lists for Stacks

//==============================================================

// Queues

// Matt -- Joy -- Samir -- Pavel

// Arrays or Linked Lists can be used to implement Queues
// Arrays are slower than Linked Lists for Queues

//==============================================================

// Stacks
// LIFO - Last In First Out

// Implementation using Arrays
class Stack {
  constructor() {
    this.stack = [];
  }


  // Add an element to the top of the stack
  push(value) {
    this.stack.push(value);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.stack.length;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy.com');
myStack.push('youtube');
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());

console.log('=====================================');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.front;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.length--;
    return removedNode.value;
  }

  // Return the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.length;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Matt");
myQueue.enqueue("Joy");
myQueue.enqueue("Samir");
myQueue.enqueue("Pavel");
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.size());