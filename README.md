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

# 7. Простые числа

https://habr.com/ru/post/333350/
https://prog-cpp.ru/eratosfen/

```js
function getPrimeNums(num) {
  if (num < 3) return [];

  const primeNums = [2];

  for (let i = 3; i < num; i++) {
    if (i % 2 === 0) continue;
    
    let isPrime = true;

    for (let j = 3; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primeNums.push(i);
  }

  return primeNums;
}

console.log(getPrimeNums(1000))
```

# 8. Бинарный поиск

```js
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
```

# 9. Разворачивание односвязного списка

```js
const util = require('util');

function reverseList(item) {
  let prev = item;
  let tmpNext = prev.next;
  prev.next = null;

  let next = tmpNext;

  while (next) {
    tmpNext = next.next;
    next.next = prev;
    prev = next;
    next = tmpNext;
  }

  return prev;
}

const reversed = reverseList({
  val: 10,
  next: {
    val: 15,
    next: {
      val: 20,
      next: {
        val: 25,
        next: {
          val: 26,
          next: null
        }
      }
    }
  }
});

console.log(util.inspect(reversed, { depth: Infinity }));
```

# 10. Все перестановки

```js
function getAllPermutations(start, end) {
  if (start === end) {
    return [ [start] ];
  }

  const diff = end - start;
  const childPerms = getAllPermutations(start + 1, end);
  const perms = [];

  childPerms.forEach(childPerm => {
    for (let i = 0; i <= diff; i++) {
      const perm = [...childPerm];
      perm.splice(i, 0, start);
      perms.push(perm);
    }
  });

  return perms;
}

console.log(getAllPermutations(1, 3));
```

# 11. Выбрать в массиве фрагмент с наибольшей суммой

```js
function maxSumFragment(arr) {
  if (arr.length === 0) return null;

  let max = start = end = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      const sum = arr.slice(j, i + 1).reduce((sum, n) => sum + n);

      if (sum > max) {
        max = sum;
        start = j;
        end = i;
      }
    }
  }

  return { max, start, end };
}

console.log(maxSumFragment([1, 2, 3]));
console.log(maxSumFragment([]));
console.log(maxSumFragment([0, 0, 0]));
console.log(maxSumFragment([-1, -2, -3]));
console.log(maxSumFragment([-1, 0, 1, 2]));
console.log(maxSumFragment([1, 2, -1, 0, 2]));
console.log(maxSumFragment([1, 2, -50, 0, 2]));
console.log(maxSumFragment([-1, 0, 3, -1, 3, 0]));
```

# 12. Вывод чисел от 1 до N^2 по спирали

```js
function getSpiral(n) {
  const matrix = [];
  let c = 1;

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(c++);
    }
    matrix.push(row);
  }

  let midRow, midCol;

  if (n % 2 === 0) {
    midRow = n/2;
    midCol = n/2 - 1;
  } else {
    midRow = midCol = Math.floor(n/2);
  }

  let rowStart = colStart = curCol = curRow = 0;
  let rowEnd = colEnd = n - 1;
  let direction = 'right';
  let view = 'col';
  const spiral = [];

  while (curRow !== midRow || curCol !== midCol) {
    spiral.push(matrix[curRow][curCol]);
    
    if (view === 'col' && direction === 'right') {
      if (curCol === colEnd) {
        view = 'row';
        direction = 'down';
        rowStart++;
        curRow++;
      } else { curCol++; } 
      continue;
    }

    if (view === 'row' && direction === 'down') {
      if (curRow === rowEnd) {
        view = 'col';
        direction = 'left';
        colEnd--;
        curCol--;
      } else { curRow++; }
      continue;
    }

    if (view === 'col' && direction === 'left') {
      if (curCol === colStart) {
        view = 'row';
        direction = 'top';
        rowEnd--;
        curRow--;
      } else { curCol--; }
      continue;
    }

    if (view === 'row' && direction === 'top') {
      if (curRow === rowStart) {
        view = 'col';
        direction = 'right';
        colStart++;
        curCol++;
      } else { curRow--; }
    }
  }
  
  spiral.push(matrix[midRow][midCol]);

  return spiral;
}

console.log(getSpiral(3));
console.log(getSpiral(4));
console.log(getSpiral(5));
```

# 13. Выдать купюры в банкомате

https://jsbin.com/likeniwabi/1/edit?js,output

```js
// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу. 
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
// P.S. не забыть модифицировать объект с номиналами.

function getMoney(amount, limits) {
  limits = limits || {
    5000: Infinity,
    1000: Infinity,
    500: Infinity,
    100: Infinity,
    50: Infinity
  };
  
  let residual = amount;
  
  let res = Object.keys(limits)
    .sort((a, b) => -(+a - +b))
    .reduce((acc, m) => {
      m = +m;
      const limit = limits[m];
      const mAmount = Math.floor(residual / m);
      const maxMAmount = limit > mAmount ? mAmount : limit;
      residual -= m * maxMAmount;
      acc[m] = maxMAmount;
      return acc;
    }, {});
    
  if (residual > 0) {
  	throw new Error();
  }
  
  return res;
}

// Верни корректный результат при запросе 300 р‣
// Верни корректный результат при запросе 6 200 р‣
// Верни ошибку если банкомат не сможет выдать требуемую сумму (349 р)

// Верни корректный результат при запросе 39 500 р‣
// Верни ошибку если банкомат не сможет выдать требуемую сумму

```