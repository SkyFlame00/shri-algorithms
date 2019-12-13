/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let curr = head, dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  while (curr && curr.next) {
      let tmp = curr.next;
      curr.next = curr.next.next;
      tmp.next = curr;
      prev.next = tmp
      prev = curr;
      curr = curr.next;
  }
  return dummy.next;
};