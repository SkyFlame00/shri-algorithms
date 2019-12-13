// Leetcode
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums.length < 2) return null;
  
  const map = {};
  
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (Number.isInteger(map[complement])) {
          return [i, map[complement]];
      }
      
      map[nums[i]] = i;
  }
  
  return null;
};