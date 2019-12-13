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
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [{...root, level: 0}], order = [];
  while (queue.length > 0) {
      let node = queue.shift();
      if (!order[node.level])
          order[node.level] = [];
      order[node.level].push(node.val);
      if (node.left)
          queue.push({...node.left, level: node.level + 1});
      if (node.right)
          queue.push({...node.right, level: node.level + 1});
  }
  return order;
};