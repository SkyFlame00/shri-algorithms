// function merge(A, p, q, r) {
//   let n1 = q - p + 1;
//   let n2 = r - q;
//   let L = [], R = [];
//   for (let i = 1; i <= n1; i++)
//     L[i] = A[p + i - 1];
//   for (let j = 1; j <= n2; j++)
//     R[j] = A[q + j];
//   L[n1 + 1] = Infinity;
//   R[n2 + 1] = Infinity;
//   let i = 1;
//   let j = 1;
//   for (let k = p; k <= r; k++) {
//     if (L[i] <= R[j]) {
//       A[k] = L[i];
//       i++
//     } else {
//       A[k] = R[j];
//       j++;
//     }
//   }
// }

function merge(A, p, q, r) {
  let L = [], R = [];
  for (let i = p; i <= q; i++)
    L.push(A[i]);
  for (let j = q + 1; j <= r; j++)
    R.push(A[j]);
  L.push(Infinity);
  R.push(Infinity);
  let i = j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++
    } else {
      A[k] = R[j];
      j++;
    }
  }
}

function mergeSort(A, p = 0, r = A.length - 1) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}


let arr1 = [5,4,3,2,1];
let arr2 = [3,-100,10,100,1,1,2,-16,-87];
mergeSort(arr2)

console.log(arr2);