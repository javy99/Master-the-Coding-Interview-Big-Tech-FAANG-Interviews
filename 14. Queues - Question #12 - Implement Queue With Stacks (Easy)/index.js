class QueueWithStacks {
  /**
   * This function initializes the queue with two stacks.
   * @returns {void}
   */
  constructor() {
    this.in = [];
    this.out = [];
  }

  /**
   * This function adds an element to the queue.
   * Time complexity is O(n).
   * @param {number} value
   * @returns {void}
   */
  enqueue(value) {
    this.in.push(value);
  }

  /**
   * This function removes an element from the queue.
   * Time complexity is O(n).
   * @returns {number}
   */
  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  /**
   * This function returns the element at the front of the queue without removing it.
   * Time complexity is O(n).
   * @returns {number}
   */
  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  /**
   * This function returns whether the queue is empty.
   * Time complexity is O(1).
   * @returns {boolean}
   */
  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

const queue = new QueueWithStacks();
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue.peek());
queue.dequeue();
console.log(queue.empty());
