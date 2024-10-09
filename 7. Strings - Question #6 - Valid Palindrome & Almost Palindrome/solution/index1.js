

// 2 pointers from outside
/**
 * This function checks if a string is a valid palindrome. It uses 2 pointers from the outside.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {string} S 
 * @returns {boolean}
 */
/*
const isValidPalindrome = function (S) {
    S = S.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let left = 0, right = S.length - 1;

    while (left < right) {
        if (S[left] !== S[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
*/


// 2 pointers from center
/**
 * This function checks if a string is a valid palindrome. It uses 2 pointers from the center.
 * Our solution's time complexity is O(n) and space complexity is O(1).
 * @param {string} S
 * @returns {boolean}
 */
/*
const isValidPalindrome = function (S) {
    S = S.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let mid = Math.floor(S.length / 2);

    let left = mid;
    let right = mid;

    if (S.length % 2 === 0) {
        right = mid;
        left = mid - 1;
    }

    while (left >= 0 && right < S.length) {
        if (S[left] !== S[right]) {
            return false;
        }
        left--;
        right++;
    }

    return true;
};
*/

// compare against reverse 
/**
 * This function checks if a string is a valid palindrome. It compares the string against its reverse.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {string} S
 * @returns {boolean}
 */
/*
const isValidPalindrome = function (S) {
    S = S.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let reversed = S.split('').reverse().join('');

    let left = 0;
    let right = 0;

    while (left < S.length) {
        if (S[left] !== reversed[right]) {
            return false;
        }
        left++;
        right++;
    }

    return true;
}
*/

// compare against reverse 
/**
 * This function checks if a string is a valid palindrome. It compares the string against its reverse.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {string} S
 * @returns {boolean}
 */
const isValidPalindrome = function (S) {
    S = S.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let rev = '';

    for (let i = S.length - 1; i >= 0; i--) {
        rev += S[i];
    }

    let left = 0;
    let right = 0;

    while (left < S.length) {
        if (S[left] !== rev[right]) {
            return false;
        }
        left++;
        right++;
    }

    return true;
}

const S1 = "aabaa";
const result1 = isValidPalindrome(S1);
console.log(result1);

const S2 = "aabbaa";
const result2 = isValidPalindrome(S2);
console.log(result2);

const S3 = "abc";
const result3 = isValidPalindrome(S3);
console.log(result3);

const S4 = "a";
const result4 = isValidPalindrome(S4);
console.log(result4);

const S5 = "";
const result5 = isValidPalindrome(S5);
console.log(result5);

const S6 = "A man, a plan, a canal: Panama";
const result6 = isValidPalindrome(S6);
console.log(result6);
