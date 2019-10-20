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

# 4. Обход дерева в глубину

```js
function walkTreeInDepth(node, viewedNodesVals=[]) {
  viewedNodesVals.push(node.val);
  
  for (let i = 0; i < node.children.length; i++) {
    walkTreeInDepth(node.children[i], viewedNodesVals);
  }

  return viewedNodesVals;
}

const viewed = walkTreeInDepth({
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 8,
          children: [
            {
              val: 9,
              children: []
            },
            {
              val: 10,
              children: [
                {
                  val: 11,
                  children: []
                }
              ]
            }
          ]
        },
        {
          val: 7,
          children: []
        },
        {
          val: 6,
          children: []
        }
      ]
    },
    {
      val: 3,
      children: [
        {
          val: 5,
          children: []
        },
        {
          val: 4,
          children: []
        }
      ]
    }
  ]
});

console.log(viewed)
```

# 5. Обход дерева в ширину

```js
function walkTreeWide(root) {
  const queue = [root];
  const viewedNodesVals = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    viewedNodesVals.push(currentNode.val);
    queue.push(...currentNode.children);
  }

  return viewedNodesVals;
}

const viewed = walkTreeWide({
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 8,
          children: [
            {
              val: 9,
              children: []
            },
            {
              val: 10,
              children: [
                {
                  val: 11,
                  children: []
                }
              ]
            }
          ]
        },
        {
          val: 7,
          children: []
        },
        {
          val: 6,
          children: []
        }
      ]
    },
    {
      val: 3,
      children: [
        {
          val: 5,
          children: []
        },
        {
          val: 4,
          children: []
        }
      ]
    }
  ]
});

console.log(viewed)
```

# 6. Баланс скобок в строке

```js
function checkParenthesesBalance(str) {
  const arr = str.split('');
  const stack = [];
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const oIdx = opening.findIndex(par => par === char);
    const cIdx = closing.findIndex(par => par === char);

    if (oIdx > -1) {
      stack.push(char);
      continue;
    }

    if (cIdx > -1 && stack.length === 0) return false;

    const lastPar = stack.pop();
    const lastParIdx = opening.findIndex(par => par === lastPar);

    if (cIdx !== lastParIdx) return false;
  }

  if (stack.length > 0) return false;

  return true;
}

console.log(checkParenthesesBalance('()(){]]['));
console.log(checkParenthesesBalance('[]{}()'));
console.log(checkParenthesesBalance('(){[[]]}'));
console.log(checkParenthesesBalance('([)]'));
console.log(checkParenthesesBalance('{}}'));
console.log(checkParenthesesBalance('('));
console.log(checkParenthesesBalance(')'));
console.log(checkParenthesesBalance('}'));
console.log(checkParenthesesBalance('{}'));
```