const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(large);

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found NEMO!");
    }
  }
}

findNemo1(large); // O(n) --> Linear Time

// function funChallenge(input) {
//   let a= 10;
//   a =50 + 3;

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction();
//     let stranger = true;
//     a++;
//   }
//   return a;
// }

// funChallenge()

function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo');
  }
}

booooo([1, 2, 3, 4, 5]); // Time Complexity: O(n) --> Linear Time, Space Complexity: O(1) --> Constant Space

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6)); // Time Complexity: O(n) --> Linear Time, Space Complexity: O(n) --> Linear Space

// Twitter
// Find 1st, Find Nth...
const array = [
  { tweet: 'hi', date: 2012 },
  { tweet: 'my', date: 2014 },
  { tweet: 'teddy', date: 2018 },
]