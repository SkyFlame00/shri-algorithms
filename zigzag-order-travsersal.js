/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let stack = [], stackNext = [{...root, reverse: false, level: 0}], ans = [];
  while (stack.length > 0 || stackNext.length > 0) {
      if (stack.length === 0) {
          stack = stackNext;
          stackNext = [];
      }
      let { level, val, reverse, left, right } = stack.pop();
      if (!ans[level]) ans[level] = [];
      ans[level].push(val);
      if (reverse) {
          if (right) {
              stackNext.push(
                  {...right, level: level + 1, reverse: !reverse}
              );    
          }
          if (left) {
              stackNext.push(
                  {...left, level: level + 1, reverse: !reverse}
              );
          }
          
      } else {
          if (left) {
              stackNext.push(
                  {...left, level: level + 1, reverse: !reverse}
              );
          }
          if (right) {
              stackNext.push(
                  {...right, level: level + 1, reverse: !reverse}
              );
          }
      }
  }
  return ans;
};