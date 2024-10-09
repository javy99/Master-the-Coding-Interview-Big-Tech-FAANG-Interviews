
/**
 * This function checks if a string is a valid palindrome. It uses 2 pointers from the outside.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {string} S
 * @param {number} left
 * @param {number} right 
 * @returns {boolean}
 */
const validSubPalindrome = function (S, left, right) {
    while (left < right) {
        if (S[left] !== S[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

/**
 * This function checks if a string is an almost palindrome. An almost palindrome is a string that can be converted into a palindrome by removing at most 1 character.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {S} S 
 * @returns {boolean}
 */
const isAlmostPalindrome = function (S) {
    let left = 0, right = S.length - 1;
    while (left < right) {
        if (S[left] !== S[right]) {
            return validSubPalindrome(S, left + 1, right) || validSubPalindrome(S, left, right - 1)
        }
        left++;
        right--;
    }
    return true;
}

const S1 = "raceacar";
const result1 = isAlmostPalindrome(S1);
console.log(result1);

const S2 = "abccdba";
const result2 = isAlmostPalindrome(S2);
console.log(result2);

const S3 = "abcdefdba";
const result3 = isAlmostPalindrome(S3);
console.log(result3);

const S4 = "";
const result4 = isAlmostPalindrome(S4);
console.log(result4);

const S5 = "a";
const result5 = isAlmostPalindrome(S5);
console.log(result5);

const S6 = "ab";
const result6 = isAlmostPalindrome(S6);
console.log(result6);
