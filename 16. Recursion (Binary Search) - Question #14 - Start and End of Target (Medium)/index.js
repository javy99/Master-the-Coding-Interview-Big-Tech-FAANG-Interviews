/**
 * This function searches for the start and end of a target value in a sorted array using binary search.
 * Our solution's time complexity is O(log(n)) and space complexity is O(1).
 * @param { number[] } array
 * @param { number } target
 * @returns { number }
 */
const binarySearch = function (array, target) {
  let left = 0, right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = array[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
/*=======================================================================================================*/

const binarySearchHelper = function (array, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = array[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

/**
 * This function searches for the start and end of a target value in a sorted array using binary search.
 * Our solution's time complexity is O(log(n)) and space complexity is O(1).
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  const firstPos = binarySearchHelper(nums, 0, nums.length - 1, target);
  if (firstPos === -1) return [-1, -1];
  let startPos = firstPos, endPos = firstPos, temp1, temp2;
  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearchHelper(nums, 0, startPos - 1, target);
  }
  startPos = temp1;
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearchHelper(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;
  return [startPos, endPos];
}

const nums1 = [1, 3, 3, 5, 5, 5, 8, 9];
const target1 = 5;
const result1 = searchRange(nums1, target1);
console.log(result1);

const nums2 = [1, 2, 3, 4, 5, 6];
const target2 = 4;
const result2 = searchRange(nums2, target2);
console.log(result2);

const nums3 = [1, 2, 3, 4, 5];
const target3 = 9;
const result3 = searchRange(nums3, target3);
console.log(result3);

const nums4 = [];
const target4 = 3;
const result4 = searchRange(nums4, target4);
console.log(result4);
