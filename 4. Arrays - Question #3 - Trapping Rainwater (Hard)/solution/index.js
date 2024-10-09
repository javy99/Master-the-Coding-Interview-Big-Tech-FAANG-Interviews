/**
 * This is a function that calculates the amount of rainwater that can be trapped in between the blocks
 * Our solution's time complexity is O(n^2) and space complexity is O(1).
 * @param {number[]} heights 
 * @returns {number}
 */
/*
const getTrappedRainwater = function (heights) {
    let totalWater = 0;

    for (let p = 0; p < heights.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }
        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }
        const currentWater = Math.min(maxLeft, maxRight) - heights[p];
        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }
    return totalWater;
}
*/

const getTrappedRainwater = function (heights) {
    let left = 0, right = heights.length - 1, maxLeft = 0, maxRight = 0, total = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                total += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                total += maxRight - heights[right];
            }
            right--;
        }
    }
    return total;
}

const heights1 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const result1 = getTrappedRainwater(heights1);
console.log(result1);

// const heights2 = [];
// const result2 = getTrappedRainwater(heights2);
// console.log(result2);

// const heights3 = [3];
// const result3 = getTrappedRainwater(heights3);
// console.log(result3);

// const heights4 = [3, 4, 3];
// const result4 = getTrappedRainwater(heights4);
// console.log(result4);
