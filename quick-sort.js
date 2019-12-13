function partition(arr, l, r, pivot) {
  [arr[pivot], arr[l]] = [arr[l], arr[pivot]];
  let p = l;

  for (let i = l + 1; i < r; i++) {
    if (arr[i] <= arr[l]) {
      p++;
      [arr[p], arr[i]] = [arr[i], arr[p]];
    }
  }

  [arr[l], arr[p]] = [arr[p], arr[l]];

  return p;
}

function quickSort(arr, l, r) {
  if (l < r) {
    const pivot = l + Math.floor(Math.random() * (r - l));
    // console.log(arr)
    const p = partition(arr, l, r, pivot);
    // console.log( l, r, pivot, p)
    if (l == 0 && r == 1 && arr[0] == 1 && arr[1] == 2) {
      console.log(arr, l, r, pivot, p)
    }

    quickSort(arr, l, p);
    quickSort(arr, p + 1, r);
  }
}

// const arr1 = [3,2,1,10,9,11,24,100,0, -10];
// const arr1 = [5,4,3,2,1]
const arr1 = [3,1,2]

const arrs = [];

// for (let i = 0; i < 100; i++) {
//   arrs.push([3,1,2])
// }

// arrs.forEach(arr => {
//   quickSort(arr,0,arr.length)
// })

// quickSort(arr1, 0, arr1.length);

// console.log(arr1);

// console.log(arrs)
const nums = []

for (let i = 0; i < 100000000; i++) {
  nums.push((Math.random()))
}

console.log(nums.filter(n => n == 0))