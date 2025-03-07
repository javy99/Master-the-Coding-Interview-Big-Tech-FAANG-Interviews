const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
letters.sort();
console.log(letters);

const basket = [2, 65, 34, 2, 1, 7, 8];
basket.sort((a, b)  => a - b);
console.log(basket)

const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
spanish.sort();
console.log(spanish);
spanish.sort((a, b) => a.localeCompare(b));
console.log(spanish);

// https://www.toptal.com/developers/sorting-algorithms

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j+1]) {
        // Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// bubbleSort(numbers);
console.log(numbers);

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // Set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // Update minimum if current is lower than what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// selectionSort(numbers);
console.log(numbers);

function insertSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the right sport
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

// insertSort(numbers);
console.log(numbers);

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  let length = array.length;
  let middle = Math.floor(length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  // console.log('left', left);
  // console.log('right', right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers);
