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

const getTreeDepth = nodesNum => Math.ceil(Math.log2(nodesNum + 1));

var isSymmetric = function(root) {
  const tree = transformTree(root);
  // const tree = root;
  console.log(tree)
  let index = 0, depth = getTreeDepth(tree.length);
  
  for (let i = 1; i <= depth; i++) {
      let num = 2 ** i, lastIndex = index + num;
      
      for (let j = 1; j <= num / 2; j++)
          if (tree[index + j] !== tree[lastIndex - j + 1])
              return false;
      
      index += num;
  }
  
  return true;
};

// function transformTree(root) {
//   const vals = [], queue = root && [root];
  
//   while (queue && queue.length > 0) {
//       const node = queue.splice(0, 1)[0];
//       if (node === null) {
//           vals.push(null);
//           continue;
//       }
//       vals.push(node.val);
//       if (node.left || node.right) {
//           queue.push(node.left, node.right);
//       }
//   }
  
//   return vals;
// }

// function getNodesNum(root) {
//   const vals = [], queue = root && [root], count = 0;
  
//   while (queue && queue.length > 0) {
//       const node = queue.splice(0, 1)[0];
//       if (node === null) {
//           // vals.push(null);
//           continue;
//       }
//       // vals.push(node.val);
//       count++;
//       if (node.left || node.right) {
//           queue.push(node.left, node.right);
//       }
//   }
  
//   return count;
// }

// function transformTree(root) {
//   const vals = [], queue = root && [ {...root, level: 1} ];
  
//   while (queue && queue.length > 0) {
//       const node = queue.splice(0, 1)[0];
//       if (node === null) {
//           vals.push(null);
//           continue;
//       }
//       vals.push(node.val);
//       if (node.left || node.right) {
//           queue.push(node.left, node.right);
//       }
//   }
  
//   return vals;
// }

// const nullOrNode = (node, level) =>
//     node === null ? { val: null, level } : {...node, level};

// function isSymmetric(root) {
//     let num = 0, queue = root && [{...root, level: 1}], vals = [];
    
//     while (queue && queue.length > 0) {
//         const node = queue.splice(0, 1)[0];
        
//         if (vals[node.level]) vals[node.level].push(node.val);
//         else vals[node.level] = [node.val];
        
//         if (node.val !== null) {
//             num += 1;
//             queue.push(
//                 nullOrNode(node.left, node.level + 1),
//                 nullOrNode(node.right, node.level + 1)
//             );
//         }
//     }
    
//     const depth = Math.ceil(Math.log2(num + 1));
    
//     for (let i = 2; i <= depth; i++) {
//         const len = vals[i].length;
//         for (let j = 0; j < len / 2; j++)
//             if (vals[i][j] !== vals[i][len - j - 1])
//                 return false;
//     }
    
//     return true;
// }

// This one is my solution

function isSymmetric(root) {
  const vals = [], queue = root && [{...root, level: 1, index: 1}];
  let depth = 1;
  while (queue && queue.length > 0) {
      const node = queue.splice(0, 1)[0];
      if (!vals[node.level]) vals[node.level] = [];
      vals[node.level][node.index - 1] = node.val;
      
      if (node.left || node.right) {
          depth = Math.max(depth, node.level + 1);
      }
      
      if (node.left) {
          queue.push({...node.left, level: node.level + 1, index: node.index * 2 - 1});
      }
      
      if (node.right) {
          queue.push({...node.right, level: node.level + 1, index: node.index * 2});
      }
  }
  
  for (let i = 2; i <= depth; i++) {
      const len = 2 ** (i - 1);
      for (let j = 0; j < len / 2; j++)
          if (vals[i][j] !== vals[i][len - j - 1])
              return false;
  }
  
  return true;
}


// This one uses recursion
function isSymmetric2(root) {
  return root ? isMirror(root.left, root.right) : true;
}

function isMirror(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  return t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left);
}

// And that one uses queue

function isSymmetric3(root) {
  if (!root) return true;
  const queue = [root.left, root.right];
  
  while (queue.length > 0) {
      const [t1, t2] = queue.splice(0, 2);
      if (!t1 && !t2) continue;
      if (!t1 || !t2) return false;
      if (t1.val !== t2.val) return false;
      queue.push(t1.left, t2.right, t1.right, t2.left);
  }
  
  return true;
}

const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    },
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    },
  }
};

const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}

const tree3 = {
  val: 2,
  left: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: {
        var: 8,
        left: null,
        right: null
      },
      right: {
        var: 9,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: {
        var: 9,
        left: null,
        right: null
      },
      right: {
        var: 8,
        left: null,
        right: null
      }
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
}

const tree4 = {
  val: 9,
  left: {
    val: -42,
    left: null,
    right: {

    }
  }
}

// console.log(isSymmetric([1,2,2,null,3,null,3]));

// console.log(isSymmetric(tree));

console.log(isSymmetric(tree3))