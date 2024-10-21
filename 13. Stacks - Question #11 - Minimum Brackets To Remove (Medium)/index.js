/**
 * This function removes the minimum number of parentheses to make the input string valid.
 * Our solution's time complexity is O(n) and space complexity is O(n).
 * @param {string} str
 * @returns {string}
 */
const minRemoveToMakeValid = function (str) {
  const res = str.split("");
  const stack = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const curIndex = stack.pop();
    res[curIndex] = "";
  }

  return res.join("");
};

const S1 = "a)bc(d)";
const result1 = minRemoveToMakeValid(S1);
console.log(result1);

const S2 = "(ab(c)d";
const result2 = minRemoveToMakeValid(S2);
console.log(result2);

const S3 = "))((";
const result3 = minRemoveToMakeValid(S3);
console.log(result3);
