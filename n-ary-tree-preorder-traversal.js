/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) {
//   return walk(root, []);
// };

// function walk(root, ans) {
//   if (root) {
//       ans.push(root.val);
//       for (let i = 0; i < root.children.length; i++)
//           walk(root.children[i], ans);
//   }
//   return ans;
// }

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return [];
  let stack = [root], ans = [];
  while (stack.length > 0) {
    console.log(stack)
      let node = stack.pop();
      ans.push(node.val);
      for (let i = node.children.length - 1; i >= 0; i++)
          stack.push(node.children[i]);
  }
  return ans;
};

let tree = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
          children: []
        },
        {
          val: 6,
          children: []
        }
      ]
    },
    {
      val: 2,
      children: []
    },
    {
      val: 4,
      children: []
    }
  ]
}

console.log(preorder(tree))