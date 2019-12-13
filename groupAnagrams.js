/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Old solution. Does not pass leetcode test case with a very large input
// var groupAnagrams = function(strs) {
//   const allAnagrams = [];
  
//   while (strs.length > 0) {
//       const anagrams = [];
//       for (let i = 1; i < strs.length; i++) {
//           if (strs[i] === undefined)
//               break;
//           if (areAnagrams(strs[0], strs[i])) {
//               anagrams.push(strs.splice(i, 1));
//               i -= 1;
//           }
//       }
//       anagrams.push(strs.splice(0, 1));
//       allAnagrams.push(anagrams);
//   }
//   return allAnagrams;
// };

// function areAnagrams(s1, s2) {
//   const chars1 = {}, chars2 = {};
//   const fn = (map, s) => {
//       s.split('').forEach(c => {
//           if (!map[c]) map[c] = 1;
//           else map[c] += 1;
//       })
//   };
//   fn(chars1, s1);
//   fn(chars2, s2);
//   const true1 = Object.keys(chars1).every(c => chars1[c] === chars2[c]);
//   const true2 = Object.keys(chars2).every(c => chars1[c] === chars2[c]);
  
//   return true1 && true2;
// }

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
      const sortedStr = strs[i].split('').sort().join('');
      if (!map[sortedStr]) map[sortedStr] = [strs[i]];
      else map[sortedStr].push(strs[i]);
  }
  return Object.keys(map).map(key => map[key]);
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));