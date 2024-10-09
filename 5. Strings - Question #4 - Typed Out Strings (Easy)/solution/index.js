/**
 * This is a function that takes a string as input and returns an array of characters after applying the backspace character.
 * Our solution's time complexity is O(n) where n is the length of the string.
 * @param {string} string 
 * @returns {number[]}
 */
const buildString = function (string) {
    const builtArray = [];
    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            builtArray.push(string[p]);
        } else {
            builtArray.pop();
        }
    }
    return builtArray;
}

/**
 * This is a function that takes two strings as input and returns a boolean value based on whether the strings are equal after applying the backspace character.
 * Our solution's time complexity is O(n + m) where n is the length of the string and space complexity is O(n + m) where n is the length of the string.
 * @param {string} S
 * @param {string} T
 * @returns {boolean}
 * */
/*
const backspaceCompare = function (S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);

    if (finalS.length !== finalT.length) {
        return false;
    } else {
        for (let p = 0; p < finalS.length; p++) {
            if (finalS[p] !== finalT[p]) {
                return false;
            }
        }
    }

    return true;
}
*/

/**
 * This is a function that takes two strings as input and returns a boolean value based on whether the strings are equal after applying the backspace character.
 * Our solution's time complexity is O(n + m) where n is the length of the string and space complexity is O(1).
 * @param {string} S 
 * @param {string} T 
 * @returns {boolean}
 */
const backspaceCompare = function (S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (S[p1] === '#' || T[p2] === '#') {
            if (S[p1] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p1--;
                    backCount--;
                    if (S[p1] === '#') {
                        backCount += 2;
                    }
                }
            }

            if (T[p2] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p2--;
                    backCount--;
                    if (T[p2] === '#') {
                        backCount += 2;
                    }
                }
            }
        } else {
            if (S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;
}

const S1 = "ab#z";
const T1 = "az#z";
const result1 = backspaceCompare(S1, T1);
console.log(result1);

const S2 = "abc#d";
const T2 = "acc#c";
const result2 = backspaceCompare(S2, T2);
console.log(result2);

const S3 = "x#y#z#";
const T3 = "a#";
const result3 = backspaceCompare(S3, T3);
console.log(result3);

const S4 = "a###b";
const T4 = "b";
const result4 = backspaceCompare(S4, T4);
console.log(result4);

const S5 = "Ab#z";
const T5 = "ab#z";
const result5 = backspaceCompare(S5, T5);
console.log(result5);

