1. Сортировка пузырьком

```js
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let max = 0;

    for (let j = 1; j < i; j++) {
      if (arr[max] > arr[j]) {
        [arr[j], arr[max]] = [arr[max], arr[j]];
      }

      max++;
    }
  }

  return arr;
}

console.log(bubbleSort([2,7,1,5,3]))
console.log(bubbleSort([3,1,2,2,5,-1]))
```