/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  return calcFib(N, {});
};

function calcFib(n, map) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let n1 = map[n - 1] ? map[n - 1] : calcFib(n - 1, map);
  let n2 = map[n - 2] ? map[n - 2] : calcFib(n - 2, map);
  map[n - 1] = n1;
  map[n - 2] = n2;
  return n1 + n2;
}


/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N < 2) {
      return N;
  }
  return memoize(N);
}

function memoize(N) {
  let cache = [0, 1];
  
  for (let i = 2; i <= N; i++)
      cache[i] = cache[i - 1] + cache[i - 2];
  
  return cache[N];
}