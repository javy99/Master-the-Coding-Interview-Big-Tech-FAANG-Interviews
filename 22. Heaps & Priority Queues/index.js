/**
 * Priority Queue
 *  - A data structure where each element has a priority.
 *  - Elements with higher priorities are served before elements with lower priorities.
 *  - If two elements have the same priority, they are served according to their order in the queue.
 *  - Priority queues are commonly implemented with heaps.
 *  - Priority queues are used in algorithms like Dijkstra's algorithm, A* search algorithm, etc.
 *  - Operations:
 *    - push: O(log(n))
 *    - pop: O(log(n))
 *    - pick: O(1)
 *    - size: O(1)
 *    - isEmpty: O(1)
 *  - Min-Heap: The element with the smallest key is at the root. The parent's key is smaller than or equal to the keys of its children.
 *  - Max-Heap: The element with the largest key is at the root. The parent's key is greater than or equal to the keys of its children.
 *  - In this implementation, we use a min-heap by default. If you want to use a max-heap, you can pass a custom comparator function.
 */
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  pick() {
    return this._heap[0];
  }
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  _leftChild(idx) {
    return idx * 2 + 1;
  }
  _rightChild(idx) {
    return idx * 2 + 2;
  }
  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }
  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  push(value) {
    this._heap.push(value);
    this._siftUp();
    return this.size();
  }
  _siftUp() {
    let nodeIdx = this.size() - 1;
    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }
  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  _siftDown() {
    let nodeIdx = 0;
    while(
      (this._leftChild(nodeIdx) < this.size() &&
      this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
      this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterNodeIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);
      this._swap(greaterNodeIdx, nodeIdx);
      nodeIdx = greaterNodeIdx;
    }
  }
  // _siftDown() {
  //   let nodeIdx = 0;
  //   while (this._leftChild(nodeIdx) < this.size()) {
  //     let largerChildIdx = this._leftChild(nodeIdx);
  //     if (
  //       this._rightChild(nodeIdx) < this.size() &&
  //       this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
  //     ) {
  //       largerChildIdx = this._rightChild(nodeIdx);
  //     }
  //     if (!this._compare(largerChildIdx, nodeIdx)) break; // Stop if parent is greater
  //     this._swap(largerChildIdx, nodeIdx);
  //     nodeIdx = largerChildIdx;
  //   }
  // }
}

const pq = new PriorityQueue((a, b) => a < b); // Min-Heap

console.log(pq.isEmpty()); // true
console.log(pq.pick()); // undefined

pq.push(5);
pq.push(1);
pq.push(10);
pq.push(3);
pq.push(7);
pq.push(2);

console.log(pq._heap); // Expected: [1, 3, 2, 5, 7, 10]

console.log(pq.pick()); // 1
console.log(pq.pop()); // 1
console.log(pq.pop()); // 2
console.log(pq.pop()); // 3
console.log(pq.pop()); // 5
console.log(pq.pop()); // 7
console.log(pq.pop()); // 10
console.log(pq.pop()); // null (queue is empty)

console.log(pq.isEmpty()); // true

console.log('----------');

const maxHeap = new PriorityQueue((a, b) => a > b); // Max-Heap

maxHeap.push(5);
maxHeap.push(1);
maxHeap.push(10);
maxHeap.push(3);
maxHeap.push(7);
maxHeap.push(2);

console.log(maxHeap._heap); // Expected: [10, 7, 5, 1, 3, 2]
console.log(maxHeap.pop()); // 10
console.log(maxHeap.pop()); // 7
console.log(maxHeap.pop()); // 5
console.log(maxHeap.pop()); // 3
console.log(maxHeap.pop()); // 2
console.log(maxHeap.pop()); // 1
console.log(maxHeap.pop()); // null
