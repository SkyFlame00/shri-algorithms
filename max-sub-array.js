/**
 * @param {number[]} nums
 * @return {number}
 */
// My old solution. The speed complexity is approx n^2

// var maxSubArray = function(nums, i = 0) {
//   if (i >= nums.length) return -Infinity;
//   let ans = -Infinity;
  
//   while (nums[i] >= 0 && i < nums.length) {
//       let tmp = ans === -Infinity ? 0 : ans;
//       ans = tmp + nums[i];
//       i += 1;
//   }
  
//   if (nums[i] < 0) {
//       let tmp = ans === -Infinity ? 0 : ans;
//       let sum1 = tmp + nums[i] + maxSum(nums, i + 1);
//       let sum2 = maxSubArray(nums, i + 1);
//       ans = Math.max(ans, sum1, sum2);
//   }
  
//   return ans;
// };

// function maxSum(nums, i = 0) {
//   let sum = 0, ans = 0;
//   for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       ans = Math.max(ans, sum);
//   }
//   return ans;
// }

var maxSubArray = function(nums, i = 0) {
  let prev = 0, max = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
      prev = Math.max(nums[i] + prev, nums[i]);
      max = Math.max(max, prev);
  }
  
  return max;
};

console.log(maxSubArray([-1]))