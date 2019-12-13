/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let stack = [root], ans = [];
  
  while (stack.length > 0) {
      let node = stack.pop();
      if (node === null) {
          continue;
      } else if (Number.isInteger(node)) {
          ans.push(node);
      } else {
          stack.push(node.right, node.val, node.left);
      }
  }
  
  return ans;
};