function parent(i) {
  return Math.floor((i - 1) / 2);
}

function left(i) {
  return 2 * i + 1;
}

function right(i) {
  return 2 * i + 2;
}

function maxHeapify(A, i) {
  let l = left(i);
  let r = right(i);
  let largest;

  if (l < A.heapSize && A[l] > A[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r < A.heapSize && A[r] > A[largest]) {
    largest = r;
  }

  if (largest != i) {
    [A[i], A[largest]] = [A[largest], A[i]];
    maxHeapify(A, largest);
  }
}

function buildMaxHeap(A) {
  A.heapSize = A.length;
  for (let i = Math.floor(A.length / 2); i >= 0; i--) {
    maxHeapify(A, i);
  }
}

function heapSort(A) {
  buildMaxHeap(A);
  for (let i = A.length - 1; i >= 1; i--) {
    [A[0], A[i]] = [A[i], A[0]];
    A.heapSize -= 1;
    maxHeapify(A, 0);
  }
}

function heapIncreaseKey(A, i, key) {
  if (key < A[i]) {
    throw new Error('new key is smaller than current key');
  }
  
  A[i] = key;

  while (i > 0 && A[parent(i)] < A[i]) {
    [A[i], A[parent(i)]] = [A[parent(i)], A[i]];
    i = parent(i);
  }
}

function maxHeapInsert(A, key) {
  A.heapSize += 1;
  A[A.heapSize - 1] = -Infinity;
  heapIncreaseKey(A, A.heapSize - 1, key);
}

// let heap = [4,1,3,2,16,9,10,14,8,7];
let arr = [2,100,-57,1,0,0,3,11,-59,-12345,123,2,2,0,1]

heapSort(arr)

console.log(arr.toString())