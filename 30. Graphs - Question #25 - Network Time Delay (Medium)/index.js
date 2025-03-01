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
    while (
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
}

/**
 * This function calculates the time it takes for a signal to reach all other nodes in a network. If the signal cannot reach all nodes, it returns -1. The algorithm uses Dijkstra's algorithm to find the shortest path from the source node to all other nodes.
 * Our solution's time complexity is O(2N + E + E log E) => O(N + E log E) where N is the number of nodes and E is the number of edges.
 * Our solution's space complexity is O(N + E) where N is the number of nodes and E is the number of edges.
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
const networkDelayTime = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  const adjList = distances.map(() => []);
  distances[k - 1] = 0;
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  for (let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target - 1, weight]);
  }
  while (!heap.isEmpty()) {
    const currentVertex = heap.pop();
    const adjacent = adjList[currentVertex];
    for (let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        heap.push(neighboringVertex);
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

/**
 * This function calculates the time it takes for a signal to reach all other nodes in a network. If the signal cannot reach all nodes, it returns -1. The algorithm uses Bellman-Ford algorithm to find the shortest path from the source node to all other nodes.
 * Our solution's time complexity is O(N+N*E) => O(N*E) where N is the number of nodes and E is the number of edges.
 * Our solution's space complexity is O(N) where N is the number of nodes.
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
const networkDelayTimeBellmanFordAlgorithm = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  distances[k - 1] = 0;
  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0] - 1;
      const target = times[j][1] - 1;
      const weight = times[j][2];
      if (distances[source] + weight < distances[target]) {
        distances[target] = distances[source] + weight;
        count++;
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
}

const n1 = 5;
const k1 = 1;
const times1 = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];
console.log(networkDelayTime(times1, n1, k1));
console.log(networkDelayTimeBellmanFordAlgorithm(times1, n1, k1));
const n2 = 3;
const k2 = 2;
const times2 = [
  [2, 3, 4]
];
console.log(networkDelayTime(times2, n2, k2));
console.log(networkDelayTimeBellmanFordAlgorithm(times2, n2, k2));
const n3 = 3;
const k3 = 1;
const times3 = [
  [1, 2, 8],
  [3, 1, 3]
];
console.log(networkDelayTime(times3, n3, k3));
console.log(networkDelayTimeBellmanFordAlgorithm(times3, n3, k3));