var lengthOfLastWord = function(s) {
  let len = 0, i = s.length - 1, lastWordMet = false;
  while (i >= 0) {
      if (lastWordMet) {
          if (s[i] == ' ') break;
          else len += 1;
      } else {
          if (s[i] != ' ') {
              lastWordMet = true;
              len += 1;
          }
      }
      i -= 1;
  }
  return len;
};

console.log(lengthOfLastWord('Hello world'));