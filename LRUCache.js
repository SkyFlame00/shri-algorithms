/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const obj = this.cache[key];
  obj && obj.count++;
  return (obj && obj.val !== undefined && obj.val) || -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  const { cache } = this;
  if (this.capacity < 1) {
      const leastKey = Object.keys(this.cache).reduce((leastKey, key) =>
          cache[key].count < cache[leastKey].count ? key : leastKey);
      delete cache[leastKey];
  }
  cache[key] = {
      val: value,
      count: 0
  };
  this.capacity > 0 && this.capacity--;
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

const cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

console.log(cache)