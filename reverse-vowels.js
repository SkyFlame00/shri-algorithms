/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let left = 0, right = s.length - 1, temp;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isVowel = char => vowels.includes(char);
  
  while (left < right) {
    
      let isLeftVowel = isVowel(s[left]);
      let isRightVowel = isVowel(s[right]);
      console.log(left, right, isLeftVowel, isRightVowel)  
      if (isLeftVowel && isRightVowel) {
          temp = s[left];
          s[left++] = s[right];
          s[right--] = temp;
          continue;
      }
      
      if (!isLeftVowel) left += 1;
      if (!isRightVowel) right -= 1;
  }
  
  return s;
};/**
* @param {string} s
* @return {string}
*/
var reverseVowels = function(s) {
   let left = 0, right = s.length - 1, temp;
   let arr = s.split('');
   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  /**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let left = 0, right = s.length - 1, temp;
  let arr = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const isVowel = char => vowels.includes(char);
  
  while (left < right) {
      let isLeftVowel = isVowel(s[left]);
      let isRightVowel = isVowel(s[right]);
      
      if (isLeftVowel && isRightVowel) {
          temp = s[left];
          arr[left++] = arr[right];
          arr[right--] = temp;
          continue;
      }
      
      if (!isLeftVowel) left += 1;
      if (!isRightVowel) right -= 1;
  }
  
  return arr.join('');
};

console.log(reverseVowels('hello'))