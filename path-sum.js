/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  return helper(root, sum, 0);
};

function helper(root, sum, acc) {
  if (!root) return false;
  if (root.left || root.right) {
      return helper(root.left, sum, acc + root.val) ||
          helper(root.right, sum, acc + root.val);
  }
  return root.val + acc === sum;
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let stack = [root], accs = [0];
  
  while (stack.length > 0) {
      let node = stack.pop();
      let acc = accs.pop();
      
      if (node.right) {
          stack.push(node.right);
          accs.push(acc + node.val);
      }
      if (node.left) {
          stack.push(node.left);
          accs.push(acc + node.val);
      }
      if (!node.right && !node.left && acc + node.val === sum) {
          return true;
      }
  }
  return false;
};