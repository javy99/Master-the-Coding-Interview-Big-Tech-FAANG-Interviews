/**
 * This is a function that takes an array of numbers representing the heights of a set of walls. It should return the maximum area of water that can be contained between two walls.
 * Our solution's time complexity is O(n^2) and space complexity is O(1).
 * @param {number[]} heights 
 * @returns {number}
 */
/*
const getMaxWaterContainer = function (heights) {
    let maxArea = 0;
    console.log({ maxArea });
    for (let p1 = 0; p1 < heights.length; p1++) {
        console.log({ p1, value: heights[p1] });
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {
            console.log({ p2 });
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
            console.log({ maxArea });
        }
    }
    return maxArea;
}
*/

/**
 * This is a function that takes an array of numbers representing the heights of a set of walls. It should return the maximum area of water that can be contained between two walls.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {number[]} heights
 * @returns {number}
 */
const getMaxWaterContainer = function (heights) {
    let p1 = 0, p2 = heights.length - 1, maxArea = 0;
    console.log({ p1, p2, maxArea });

    while (p1 < p2) {
        console.log({ p1, p2 });
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        console.log({ height, width, area });
        maxArea = Math.max(maxArea, area);
        console.log({ maxArea });

        if (heights[p1] < heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
}



// const heights1 = [7, 1, 2, 3, 9];
// const result1 = getMaxWaterContainer(heights1);
// console.log(result1);

// const heights2 = [];
// const result2 = getMaxWaterContainer(heights2);
// console.log(result2)

// const heights3 = [7];
// const result3 = getMaxWaterContainer(heights3);
// console.log(result3);

// const heights4 = [6, 9, 3, 4, 5, 8];
// const result4 = getMaxWaterContainer(heights4);
// console.log(result4);

const heights5 = [4, 8, 1, 2, 3, 9];
const result5 = getMaxWaterContainer(heights5);
console.log(result5);