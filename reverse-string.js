/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++)
      [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  return s;
};


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  helper(s, 0, s.length - 1);
};

function helper(s, left, right) {
  if (left >= right) return;
  [s[left], s[right]] = [s[right], s[left]];
  helper(s, left + 1, right - 1);
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left += 1;
      right -= 1;
  }
};
