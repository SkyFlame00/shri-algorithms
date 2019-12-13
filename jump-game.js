// Leetcode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums, i = 0, cache = new Map()) {
//   if (i === nums.length - 1) return true;
//   if (i + nums[i] >= nums.length - 1) return true;
  
//   const furthestJump = Math.min(nums.length - 1, i + nums[i]);
  
//   for (let j = i + 1; j <= furthestJump; j++) {
//       if (cache.has(j))
//           continue;
      
//       if (canJump(nums, j, cache))
//           return true;
//   }
  
//   cache.set(i, false);
  
//   return false;
// };

// The solution with JS object is even faster than with
// Map. It took 2384 ms in comparison to 4292 ms

var canJump = function(nums, i = 0, cache = {}) {
  if (i === nums.length - 1) return true;
  if (i + nums[i] >= nums.length - 1) return true;
  
  const furthestJump = Math.min(nums.length - 1, i + nums[i]);
  
  for (let j = i + 1; j <= furthestJump; j++) {
      if (cache[j] === false)
          continue;
      
      if (canJump(nums, j, cache))
          return true;
  }
  
  cache[i] = false;
  
  return false;
};

// console.log(canJump([2,3,1,1,4]));

// console.log(canJump([2,1,0,0]));

console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]));