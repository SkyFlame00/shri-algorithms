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


// First solution
var levelOrderBottom = function(root) {
  if (!root) return [];
  let queue = [root], ans = [];
  while (queue.length > 0) {
      let arr = [];
      let len = queue.length;
      for (let i = 0; i < len; i++) {
          let {val, left, right} = queue.shift();
          arr.push(val);
          if (left) queue.push(left);
          if (right) queue.push(right);
      }
      ans.unshift(arr);
  }
  return ans;
};

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


//Second solution
var levelOrderBottom = function(root) {
  if (!root) return [];
  let d = depth(root), ans = [];
  walk(root, d, ans);
  return ans;
};

function walk(root, depth, ans) {
  if (!root) return;
  if (!ans[depth - 1]) ans[depth - 1] = [];
  ans[depth - 1].push(root.val);
  walk(root.left, depth - 1, ans);
  walk(root.right, depth - 1, ans);
}

function depth(root) {
  if (!root) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
}