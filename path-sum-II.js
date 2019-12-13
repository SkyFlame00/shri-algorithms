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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  let ans = [];
  helper(root, sum, 0, [], ans);
  return ans;
};

function helper(root, sum, acc, path, ans) {
  if (root.left) {
      helper(root.left, sum, acc + root.val, [...path, root.val], ans);
  }
  if (root.right) {
      helper(root.right, sum, acc + root.val, [...path, root.val], ans);
  }
  if (!root.left && !root.right && acc + root.val === sum) {
      ans.push([...path, root.val]);
  }
}