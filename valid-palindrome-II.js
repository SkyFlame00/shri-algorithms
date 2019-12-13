/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let res = isValidPalindrome(s, null);
  if (res.ok) return true;
  console.log(res)
  let leftRes = isValidPalindrome(s, res.left);
  if (leftRes.ok) return true;
  
  let rightRes = isValidPalindrome(s, res.right);
  if (rightRes.ok) return true;
  
  return false;
};

function isValidPalindrome(s, skip) {
  let left = 0, right = s.length - 1;
  
  while (left < right) {
      if (left == skip) {
          left += 1;
          continue;
      }
      if (right == skip) {
          right -= 1;
          continue;
      }
      if (s[left] !== s[right]) {
          return { ok: false, left, right };
      }
      left += 1;
      right -= 1;
  }
  
  return { ok: true };
}

console.log(validPalindrome("deeee"));