let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhhhh!');
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user); // O(1)
user.scream(); // O(1)

// When we have collision it slows down the time complexity to O(n/k) where k is the size of the hash table
// In the worst case scenario it can be O(n) if we have a bad hash function
// In the best case scenario it can be O(1) if we have a good hash function
// The hash function is the most important part of the hash table
// It should be fast and distribute the keys uniformly
// We can use prime numbers in the hash function to reduce collisions
// We can also use a large array to reduce collisions
// We can also use a linked list to handle collisions
// We can also use a combination of the above methods to handle collisions
// We can also use a binary search tree to handle collisions

// Array vs Hash Table
// Array
// - Fast lookups
// - Ordered
// - Can have duplicates
// - Can have negative indexes
// - Can have gaps
// Hash Tables
// - Fast lookups
// - Unordered
// - No duplicates
// - No negative indexes
// - No gaps
// - Can have collisions
// - Can have keys that are not strings

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(10);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
console.log(myHashTable);
console.log(myHashTable.keys());
console.log(myHashTable);