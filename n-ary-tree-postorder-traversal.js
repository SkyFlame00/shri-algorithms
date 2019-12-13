/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// var postorder = function(root) {
//   return walk(root, []);
// };

// function walk(root, ans) {
//   if (!root) return [];
//   for (let i = 0; i < root.children.length; i++)
//       walk(root.children[i], ans);
//   ans.push(root.val);
//   return ans;
// }

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// var postorder = function(root) {
//   if (!root) return [];
//   let queue = [root], ans = [], d = depth(root), curDepth = 0;
//   console.log(d)
//   while (queue.length > 0) {
//     console.log(queue)
//       let arr = [], len = queue.length;
//       for (let i = 0; i < len; i++) {
//           let {val, children} = queue.shift();
//           arr.push(val);
//           queue.push(...children);
//       }
//       ans[d - curDepth - 1] = arr;
//       curDepth++;
//   }
//   return ans;
// };

// function depth(root) {
//   if (!root) return 0;
//   let max = 0;
//   for (let i = 0; i < root.children.length; i++)
//     max = Math.max(max, depth(root.children[i]));
//   return max + 1;
// }

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) return [];
  let stack = [root], ans = [];
  while (stack.length > 0) {
      let {val, children} = stack.pop();
      ans.unshift(val)
      stack.push(...children);
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

console.log(postorder(tree))