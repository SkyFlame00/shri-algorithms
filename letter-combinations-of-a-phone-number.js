// Leetcode

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.toString().length === 0)
      return [];
  
  const mapping = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
  };
  
  const arr = digits.toString().split('').reduce((arr, digit) =>
      [...arr, mapping[digit]], []);
  const comb = [];
  calcAllComb(arr, 0, comb);
  return comb;
};

function calcAllComb(arr, i, comb, str='') {
  if (i === arr.length - 1) {
      for (let j = 0; j < arr[i].length; j++) {
          comb.push(str + arr[i][j]);
      }
  } else {
      for (let j = 0; j < arr[i].length; j++) {
          calcAllComb(arr, i + 1, comb, str + arr[i][j])
      }
  }
}