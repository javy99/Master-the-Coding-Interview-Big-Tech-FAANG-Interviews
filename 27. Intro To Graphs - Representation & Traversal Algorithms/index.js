/**
 * This function will traverse a graph using Breadth First Search (BFS) algorithm.
 * Our solution's time complexity is O(V + E), where V is the number of vertices and E is the number of edges.
 * Our solution's space complexity is O(V), where V is the number of vertices.
 * @param {Object, Array} graph
 * @returns {Array}
 */
const traversalBFS = function (graph) {
  const queue = [0];
  const values = [];
  const seen = {};
  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return values;
}

/**
 * This function will traverse a graph using Depth First Search (DFS) algorithm.
 * Our solution's time complexity is O(V + E), where V is the number of vertices and E is the number of edges.
 * Our solution's space complexity is O(V), where V is the number of vertices.
 * @param {Number} vertex
 * @param {Object, Array} graph
 * @param {Array} values
 * @param {Object} seen
 * @returns {Array}
 */
const traversalDFS = function (vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;
  const connections = graph[vertex];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (!seen[connection]) {
      traversalDFS(connection, graph, values, seen);
    }
  }
  return values;
}

const graph1 = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 5, 6],
  3: [1],
  4: [1],
  5: [2],
  6: [2]
};
console.log("BFS1", traversalBFS(graph1)); // [0, 1, 2, 3, 4, 5, 6]
console.log("DFS1", traversalDFS(0, graph1, [], {})); // [0, 1, 3, 4, 2, 5, 6]
const graph2 = {
  0: [1, 3],
  1: [0],
  2: [3, 8],
  3: [0, 4, 5, 2],
  4: [3, 6],
  5: [3],
  6: [4, 7],
  7: [6],
  8: [2]
};
console.log("BFS2", traversalBFS(graph2)); // [0, 1, 3, 4, 5, 2, 6, 8, 7]
console.log("DFS2", traversalDFS(0, graph2, [], {})); // [0, 1, 3, 4, 6, 7, 5, 2, 8]
const graph3 = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];
console.log("BFS3", traversalBFS(graph3)); // [0, 1, 3, 4, 5, 2, 6, 8, 7]
console.log("DFS3", traversalDFS(0, graph3, [], {})); // [0, 1, 3, 4, 6, 7, 5, 2, 8]