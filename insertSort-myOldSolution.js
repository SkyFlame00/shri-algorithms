function insertSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      const buffer = arr[i];
      arr[i] = arr[i - 1];

      for (let j = i - 1; j >= 0; j--) {
        if (j > 0 && arr[j - 1] > buffer) {
          arr[j] = arr[j - 1];
        } else {
          arr[j] = buffer;
          break;
        }
      }
    }
  }

  return arr;
}

console.log(insertSort([2,7,1,5,3]))
console.log(insertSort([3,1,2,2,5,-1]))
console.log(insertSort([10,8,7,-6,1]))