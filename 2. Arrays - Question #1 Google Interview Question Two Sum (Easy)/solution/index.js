/**
 * This is a function that takes in an array of numbers and a target number. It should return the indices of the two numbers that add up to the target number as an array.
 * Our solution's time complexity is O(n^2) and space complexity is O(1).
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
/*
const findTwoSum = function (nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        console.log({ p1, value: nums[p1] })
        const numberToFind = target - nums[p1];
        console.log({ numberToFind })

        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            console.log({ p2, value: nums[p2] })
            if (nums[p2] === numberToFind) {
                return [p1, p2];
            }
        }
    }
    return null;
}
*/

/**
 * This is a function that takes in an array of numbers and a target number. It should return the indices of the two numbers that add up to the target number as an array.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const findTwoSum = function (nums, target) {
    const numsMap = {};
    console.log({ numsMap });

    for (let p = 0; p < nums.length; p++) {
        console.log({ p, value: nums[p] })
        // const currentMapVal = numsMap[nums[p]];
        // console.log({ currentMapVal })
        if (numsMap[nums[p]] >= 0) {
            return [numsMap[nums[p]], p];
        } else {
            const numberToFind = target - nums[p];
            console.log({ numberToFind });
            numsMap[numberToFind] = p;
            console.log({ numsMap });
        }
    }
    return null;
}
const numArrays1 = [1, 3, 7, 9, 2];
const target1 = 11;
const result1 = findTwoSum(numArrays1, target1);
console.log(result1);

// const numArrays2 = [1, 2, 3, 4, 5];
// const target2 = 25;
// const result2 = findTwoSum(numArrays2, target2);
// console.log(result2);

// const numArrays3 = [];
// const target3 = 3;
// const result3 = findTwoSum(numArrays3, target3);
// console.log(result3);

// const numArrays4 = [5];
// const target4 = 8;
// const result4 = findTwoSum(numArrays4, target4);
// console.log(result4);

// const numArrays5 = [5];
// const target5 = 5;
// const result5 = findTwoSum(numArrays5, target5);
// console.log(result5);

// const numArrays6 = [1, 6];
// const target6 = 7;
// const result6 = findTwoSum(numArrays6, target6);
// console.log(result6);