/**
 * This is a function that finds the length of the longest substring without repeating characters.
 * Our solution's time complexity is O(n^2) and space complexity is O(n).
 * @param {string} S 
 * @returns {number} longest
 */
/*
const lengthOfLongestSubstring = function (S) {
    if (S.length <= 1) return S.length;

    let longest = 0;
    for (let left = 0; left < S.length; left++) {
        let seenChars = {};
        let currentLength = 0;
        for (let right = left; right < S.length; right++) {
            const currentChar = S[right];
            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }
    return longest;
};
*/

/**
 * This is a function that finds the length of the longest substring without repeating characters.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {string} S
 * @returns {number} longest
 */
const lengthOfLongestSubstring = function (S) {
    if (S.length <= 1) return S.length;

    const seenChars = {};
    let left = 0, longest = 0;

    for (let right = 0; right < S.length; right++) {
        const currentChar = S[right];
        const prevSeenChar = seenChars[currentChar];
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seenChars[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}

const S1 = "abccabb";
const result1 = lengthOfLongestSubstring(S1);
console.log(result1);

const S2 = "cccccc";
const result2 = lengthOfLongestSubstring(S2);
console.log(result2);

const S3 = "";
const result3 = lengthOfLongestSubstring(S3);
console.log(result3);

const S4 = "abcbda";
const result4 = lengthOfLongestSubstring(S4);
console.log(result4);
