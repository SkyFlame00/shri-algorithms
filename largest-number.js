/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const str = nums.map(n => n.toString()).sort((s1, s2) => {
      const len = Math.max(s1.length, s2.length);
      let s1Last = -1, s2Last = -1, k = 0;
      for (let i = 0; i < len; i++) {
          s1Last = s1[i] ? s1[i] : s1[k++];
          s2Last = s2[i] ? s2[i] : s2[k++];
          if (s1Last > s2Last) return -1;
          if (s1Last < s2Last) return 1;
      }
      return 0;
  }).join('');
  
  return str[0] === '0' ? '0' : str;
};