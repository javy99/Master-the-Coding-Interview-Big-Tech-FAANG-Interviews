const user = {
  id: 104,
  email: 'timmy@gmail.com',
  personalInfo: {
    name: 'Timmy',
    address: {
      line1: 'westwish st',
      line2: 'apt 2',
      city: 'Metropolis',
      state: 'CA',
      zip: '12345'
    }
  }
}

let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}

console.log(inception());

// Anatomy of Recursion (Rules):
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns.

// Anything you do with a recursion CAN be done iteratively (loop)

function fibonacciIterative(n) { // O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
console.log(fibonacciIterative(2));

function fibonacciRecursive(n) { // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(4));

// Recursive VS Iterative
// Pros of Recursion:
// - DRY
// - Readability
// Cons of Recursion:
// - Large stack (stack overflow)
// - Hard to understand
// - Hard to debug
// - Recursion is slow

// Tail Call Optimization
// - Some languages can optimize tail calls including ES6 but not all browsers support it
// - Tail call optimization is a way to optimize recursive functions
// - It's a way to optimize recursive functions by reusing the stack frame