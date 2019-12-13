/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0, right = nums.length - 1, count = 0;
  
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] < nums[right]) {
          right = mid;
      } else {
          left = mid + 1;
      }
      count++;
  }
  
  return [nums[left], count];
};

// console.log(findMin([2,2,2,0,1]))
// console.log(findMin([2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1]))
console.log(findMin([1,3,3]))

let arr = [];

for (let i = 1; i <= 1000; i++)
  arr.push(1);

arr.push(0);

// console.log(findMin(arr))