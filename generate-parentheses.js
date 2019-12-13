// Leetcode

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const combinations = [];
  walk(n * 2, '', 0, combinations);
  return combinations;
};

function walk(n, str, oNum, combinations) {
  if (n === 0) {
      combinations.push(str);
  } else if (oNum === 0) {
      walk(n - 1, str + '(', oNum + 1, combinations);
  } else {
      walk(n - 1, str + ')', oNum - 1, combinations);
      if (n > oNum) {
          walk(n - 1, str + '(', oNum + 1, combinations);
      }
  }
}