/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//   if (!root) return true;
//   let [isValid] = check(root);
//   return isValid;
// };

// function check(root) {
//   let isValid, min, max;
//   if (root.left && root.right) {
//       let [isValid1, min1, max1] = check(root.left);
//       let [isValid2, min2, max2] = check(root.right);
//       if (!isValid1 || !isValid2) return [false];
//       isValid = root.val > max1 && root.val < min2;
//       min = min1;
//       max = max2;
//   } else if (root.left) {
//       let [isValid1, min1, max1] = check(root.left);
//       if (!isValid1) return [false];
//       isValid = root.val > max1;
//       min = min1;
//       max = root.val;
//   } else if (root.right) {
//       let [isValid2, min2, max2] = check(root.right);
//       if (!isValid2) return [false];
//       isValid = root.val < min2;
//       min = root.val;
//       max = max2;
//   } else {
//       isValid = true;
//       min = max = root.val;
//   }
//   return [isValid, min, max];
// }

// function isValidBST(root) {
//   return check(root, null, null);
// }

// function check(root, lower, upper) {
//   if (!root) return true;

//   if (lower !== null && root.val <= lower) return false;
//   if (upper !== null && root.val >= upper) return false;

//   if (! check(root.left, lower, root.val)) return false;
//   if (! check(root.right, root.val, upper)) return false;

//   return true;
// }

// iterative using stack

let stack = [], lowers = [], uppers = [];

function isValidBST(root) {
  let lower = null, upper = null;
  update(root, lower, upper);

  while (stack.length > 0) {
    let node = stack.pop();
    lower = lowers.pop();
    upper = uppers.pop();

    if (node === null) continue;
    let val = node.val;
    if (lower !== null && val <= lower) return false;
    if (upper !== null && val >= upper) return false;

    update(node.right, val, upper);
    update(node.left, lower, val);
  }
  
  return true;
}

function update(root, lower, upper) {
  stack.push(root);
  lowers.push(lower);
  uppers.push(upper);
}

let tree = {
  val: -30,
  left: null,
  right: {
    val: -22,
    left: null,
    right: {
      val: 35,
      left: null,
      right: {
        val: 80,
        left: null,
        right: null
      }
    }
  }
}



console.log(isValidBST(tree))