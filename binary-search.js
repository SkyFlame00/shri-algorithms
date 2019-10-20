function binarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while(left < right) {
    mid = Math.floor((right + left) / 2);

    if (search <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return arr[right] === search ? right : -1;
}

console.log(binarySearch([1,2,3,4,5], 3));
console.log(binarySearch([1,2,3,4,5], -1));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 25));
console.log(binarySearch([1,2,3,4,5], 1000));
console.log(binarySearch([1,2,3,4,5], -5));