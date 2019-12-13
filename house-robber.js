/**
 * @param {number[]} nums
 * @return {number}
 */
// my old solution

// var rob = function(nums, i = 0, cache = {}) {
//   if (nums.length === 0) {
//     cache.n++;
//     return 0;
//   }
//   if (nums.length === 1) {
//     cache.n++;
//     return nums[0];
//   }
  
//   const sum1 = nums[0] + rob(nums.slice(2), i + 2, cache);
//   const sum2 = nums[1] + rob(nums.slice(3), i + 3, cache);
  
//   max = Math.max(sum1, sum2);
  
//   return max;
// };

// const test = () => {
//   const counts = [], nums = [];
//   for (let i = 0; i < 20; i++) {
//     const counter = { n: 0 };
//     rob(nums, 0, counter);
//     counts.push(counter.n);
//     nums.push(1);
//   }
//   console.log(counts);
// };

// test()


// Dynamic programming
var rob = function(n) {
  if (n.length === 0) return 0;
  if (n.length === 1) return n[0];
  
  let A = [n[0]];
  let B = [0];
  
  for (let i = 1; i < n.length; i++) {
      A[i] = B[i - 1] + n[i];
      B[i] = Math.max(A[i - 1], B[i - 1]);
  }
  
  return Math.max(A[n.length - 1], B[n.length - 1]);
};