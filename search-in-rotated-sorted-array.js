/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = findStart(nums), sub1, sub2;
  
  if (start == 0) {
      sub1 = [0, nums.length - 1];
      sub2 = null;
  } else {
      sub1 = [start, nums.length - 1];
      sub2 = [0, start - 1];
  }
  
  while (
      true
  ) {
    // console.log(sub1, sub2)
      if (sub1 && sub2) {
          let len1 = sub1[1] - sub1[0] + 1;
          let len2 = sub2[1] - sub2[0] + 1;
          let mid = Math.floor((len1 + len2 - 1) / 2);
          
          if (sub1[0] + mid <= sub1[1]) {
              if (nums[sub1[0] + mid] >= target) {
                  sub1[1] = sub1[0] + mid;
                  sub2 = null;
              } else {
                  sub1[0] += mid + 1;
                  if (sub1[0] > sub1[1]) sub1 = null;
              }
          } else {
              let step = (sub1[0] + mid) % sub1[1] - 1;
              if (nums[sub2[0] + step] >= target) {
                  sub2[1] = sub2[0] + step;
              } else {
                  sub2[0] += step + 1;
                  sub1 = null;
                  if (sub2[0] > sub2[1]) sub2 = null;
              }
          }
          
          continue;
      }
      
      if (sub1) {
          sub1 = binarySearch(nums, sub1[0], sub1[1], target);
          break;
      }
      
      if (sub2) {
          sub2 = binarySearch(nums, sub2[0], sub2[1], target);
          break;
      }
  }
  
  if (sub1) {
      return nums[sub1[0]] === target ? sub1[0] : -1;
  }
  
  if (sub2) {
      return nums[sub2[0]] === target ? sub2[0] : -1;
  }
};

function findStart(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function binarySearch(arr, left, right, item) {
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] >= item) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  
  return [left, right];
}

console.log(search([4,5,6,7,0,1,2], 1));