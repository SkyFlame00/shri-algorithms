// leetcode 1081

/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  let map = {};
  
  for (let c of text) {
      if (!map[c]) map[c] = true;
  }
  
  let chars = Object.keys(map).sort();
  
  return subsequence(text, chars, '', 0);
};

function subsequence(text, chars, s, pos) {
  if (chars.length === 0) {
      return s;
  }
  
  for (let i = 0; i < chars.length; i++) {
      let index = text.indexOf(chars[i], pos);
      
      if (index < 0) return null;
      
      let newChars = [...chars.slice(0, i), ...chars.slice(i + 1)];
      let res = subsequence(text, newChars, s + chars[i], index + 1);
      
      if (res) {
          return res;
      }
  }
}