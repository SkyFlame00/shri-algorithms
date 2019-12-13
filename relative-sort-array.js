// Leetcode

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// First solution

 // var relativeSortArray = function(arr1, arr2) {
//   const map = {}, ans = [], tail = [];
//   for (let i = 0; i < arr2.length; i++) {
//       map[arr2[i]] = true;
//       for (let j = 0; j < arr1.length; j++)
//           if (arr1[j] === arr2[i])
//               ans.push(arr2[i]);
//   }
//   for (let i = 0; i < arr1.length; i++)
//       if (!map[arr1[i]])
//           tail.push(arr1[i]);
//   tail.sort((a, b) => a - b);
//   return [...ans, ...tail];
// };

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map1 = {}, map2 = {}, arr = [], tail = [];
  
  for (let i = 0; i < arr1.length; i++) {
      if (map1[arr1[i]]) map1[arr1[i]]++;
      else map1[arr1[i]] = 1;
  }
  
  for (let i = 0; i < arr2.length; i++) {
      map2[arr2[i]] = true;
      while(map1[arr2[i]] > 0) {
          arr.push(arr2[i]);
          map1[arr2[i]]--;
      }
  }
  
  Object.keys(map1).forEach(n => {
      if (!map2[n]) {
          while (map1[n] > 0) {
              tail.push(n);
              map1[n]--;
          }
      }
  });
  
  tail.sort((a, b) => a - b);
  
  return [...arr, ...tail];
};