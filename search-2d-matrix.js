/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(m, target) {
  if (m.length === 0) return false;
  let searchRow = findRow(m, target);
  if (searchRow < 0) return false;
  let search = binarySearch(m[searchRow], target);
  return search > -1;
};

function findRow(m, target) {
  let left = 0, right = m.length - 1;
  
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      if (m[mid][m[mid].length - 1] >= target) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  
  return (
      m[left][0] <= target && m[left][m[left].length - 1] >= target
          ? left
          : -1
  );
}

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] >= target) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  
  return arr[left] === target ? left : -1;
}