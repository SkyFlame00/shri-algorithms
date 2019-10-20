# 1. Сортировка пузырьком

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

# 2. Сортировка выбором

```js
function selectSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let max = 0;

    for (let j = 1; j < i; j++) {
      if (arr[j] > arr[max]) {
        max = j
      }
    }

    [arr[i - 1], arr[max]] = [arr[max], arr[i - 1]];
  }

  return arr;
}

console.log(selectSort([2,7,1,5,3]))
console.log(selectSort([3,1,2,2,5,-1]))
console.log(selectSort([10,8,7,-6,1]))
```