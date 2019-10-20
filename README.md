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

# 3. Сортировка вставками

```js
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
```