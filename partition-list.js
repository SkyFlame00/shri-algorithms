function ListNode(val) {
       this.val = val;
     this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return head;
  
  let less = [], curr = head, dummy = new ListNode(null), prev = dummy;
  dummy.next = head;

  while (curr) {
      if (curr.val < x) {
          less.push(curr);
          prev.next = curr.next;
          curr = curr.next;
      } else {
          prev = curr;
          curr = curr.next;
      }
  }
  less.sort((a, b) => b.val - a.val);
  console.log(less)
  curr = dummy.next;
  prev = dummy;
  let node = less.pop();
  while (node) {
      if (node.val <= curr.val) {
          node.next = curr;
          prev.next = node;
          prev = node;
          node = less.pop();
      } else {
          prev = curr;
          curr = curr.next;
      }
  }
  
  return dummy.next;
};


let list = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2,
            next: null
          }
        }
      }
    }
  }
}

console.log(partition(list, 3))