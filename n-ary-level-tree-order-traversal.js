/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

// Recursive solution. Very efficient
// var levelOrder = function(root) {
//   if (!root) return [];
//   return walk(root, 0, []);
// };

// function walk({ val, children }, level, ans) {
//   if (!ans[level]) ans[level] = [];
//   ans[level].push(val);
//   for (let i = 0; i < children.length; i++) {
//       walk(children[i], level + 1, ans)
//   }
//   return ans;
// }


// Second solution. Also very good one
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root], ans = [];
  while (queue.length > 0) {
      let arr = [];
      let len = queue.length;
      for (let i = 0; i < len; i++) {
          let {val, children} = queue.shift();
          arr.push(val);
          queue.push(...children);
      }
      ans.push(arr);
  }
  return ans;
};