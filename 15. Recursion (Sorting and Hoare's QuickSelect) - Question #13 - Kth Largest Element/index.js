/**
 * This function sorts an array using the quick sort algorithm.
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 */
const quickSort = function (array, left, right) {
  if (left < right) {
    const partitionIdx = partition(array, left, right);
    quickSort(array, left, partitionIdx - 1);
    quickSort(array, partitionIdx + 1, right);
  }
};

/**
 * This function sorts an array using the quick select algorithm.
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 * @param {number} indexToFind
 * @returns {number}
 */
const quickSelect = function (array, left, right, indexToFind) {
  if (left < right) {
    const partitionIdx = partition(array, left, right);

    if (partitionIdx === indexToFind) {
      return array[partitionIdx];
    } else if (partitionIdx < indexToFind) {
      return quickSelect(array, partitionIdx + 1, right, indexToFind);
    } else {
      return quickSelect(array, left, partitionIdx - 1, indexToFind);
    }
  }
  return array[left];
};

/**
 * This function partitions an array.
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
const partition = function (array, left, right) {
  const pivotElement = array[right];
  let partitionIdx = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(array, partitionIdx, right);
  return partitionIdx;
};

/**
 * This function swaps two elements in an array.
 * @param {number[]} array
 * @param {number} i
 * @param {number} j
 */
const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

/**
 * This function finds the kth largest element in an array.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  // quickSort(nums, 0, nums.length - 1);
  // return nums[indexToFind];

  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

const S1 = [3, 2, 1, 5, 6, 4];
const result1 = findKthLargest(S1, 2);
console.log(result1);

const S2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const result2 = findKthLargest(S2, 4);
console.log(result2);

const S3 = [3, 2, 1, 5, 6, 4];
const result3 = findKthLargest(S3, 1);
console.log(result3);
