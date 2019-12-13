// Leetcode

/**
 * @param {number[]} nums
 * @return {number}
 */

// My old solution
// var removeDuplicates = function(nums) {
//   const isInt = Number.isInteger;
//   for (let i = 0; i < nums.length; i++) {
//       if (!isInt(nums[i])) break;
//       for (let j = i + 1; j < nums.length; j++) {
//           if (!isInt(nums[j])) break;
//           if (nums[i] === nums[j]) {
//               nums.splice(j, 1);
//               j -= 1;
//           }
//       }
//   }
//   return nums.length;
// };

var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
          nums[i + 1] = nums[j];
          i += 1;
      }
  }
  return i + 1;
};