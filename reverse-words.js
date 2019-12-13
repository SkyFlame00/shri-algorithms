/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = [], word = [];
  
  for (let i = 0; i < s.length; i++) {
    
    if (s[i] == ' ') {
        if (!s[i - 1] || !s[i + 1]) continue;
        if (word.length > 0) {
            words.push(word.join(''));
            word = [];
        }
        if (s[i + 1] && s[i + 1] != ' ' && words.length > 0) {
            words.push(' ');
        }
    } else {
        word.push(s[i]);
    }
  }
  
  if (word.length > 0)
      words.push(word.join(''));
  
  return words.reverse().join('');
};