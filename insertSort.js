function insertSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    const buffer = arr[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > buffer) {
        arr[j + 1] = arr[j];
      }
      else {   
        break;
      }
    }

    arr[j + 1] = buffer;
  }

  return arr;
}

console.log(insertSort([2, 7, 1, 5, 3]))
console.log(insertSort([7, 1, 5]))
console.log(insertSort([3,1,2,2,5,-1]))
console.log(insertSort([10,8,7,-6,1]))