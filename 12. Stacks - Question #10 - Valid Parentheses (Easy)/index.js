const parens = {
  "(": ")",
  "{": "}",
  "[": "]",
};

/**
 * This function checks if the given string has valid parentheses.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {string} s 
 * @returns {boolean}
 */
const isValidParentheses = function (s) {
  if (s.length === 0) return true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (s[i] !== correctBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const S1 = "{([])}";
const result1 = isValidParentheses(S1);
console.log(result1);

const S2 = "{([]";
const result2 = isValidParentheses(S2);
console.log(result2);

const S3 = "{[(])]}";
const result3 = isValidParentheses(S3);
console.log(result3);

const S4 = "{[]()}";
const result4 = isValidParentheses(S4);
console.log(result4);

const S5 = "";
const result5 = isValidParentheses(S5);
console.log(result5);
