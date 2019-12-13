// Leetcode (7)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const BASE = 2 ** 31;
  const MAX = BASE - 1;
  const MIN = -BASE;
  let rev = 0;
  
  while (x !== 0) {
    console.log(x)
      const pop = x % 10;
      x = Math.floor(x / 10);
      rev = rev * 10 + pop;
      if (rev > MAX || rev < MIN) {
          return 0;
      }
  }
  
  return rev;
};

console.log(reverse(-123))