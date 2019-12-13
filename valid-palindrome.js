/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase(), left = 0, right = s.length - 1;
  const isValidChar = char => {
      let code = char.charCodeAt();
      return (code >= 48 && code <= 57) ||
          (code >= 97 && code <= 122);
  };
  
  while (left < right) {
      let isLeftValidChar = isValidChar(str[left]);
      let isRightValidChar = isValidChar(str[right]);
      
      if (isLeftValidChar && isRightValidChar) {
          if (str[left++] !== str[right--])
              return false;
          continue;
      }
      
      if (!isLeftValidChar) left += 1;
      if (!isRightValidChar) right -= 1;
  }
  
  return true;
};