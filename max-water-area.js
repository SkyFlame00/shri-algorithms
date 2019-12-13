// Leetcode

/**
 * @param {number[]} height
 * @return {number}
 */
// Old one: Brute force

// var maxArea = function(height) {
//   let max = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//       for (let j = 0; j < height.length; j++) {
//           const area = (j - i) * Math.min(height[i], height[j]);
//           if (area === 56) {
//             console.log(i, j)
//           }
//           max = area > max ? area : max;
//       }
//   }
//   return max;
// };

var maxArea = function(height) {
  let max = 0, l = 0, r = height.length - 1;
  while (l < r) {
      max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
      if (height[l] < height[r]) {
          l++;
      } else {
          r--;
      }
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));