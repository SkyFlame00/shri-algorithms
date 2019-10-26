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