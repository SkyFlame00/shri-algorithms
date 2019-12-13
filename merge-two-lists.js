function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  const list = new ListNode(null);
  let curr = list;
  
  while (l1 || l2) {
      if (!l1) {
          curr.next = new ListNode(l2.val);
          l2 = l2.next
      } else if (!l2) {
          curr.next = new ListNode(l1.val);
          l1 = l1.next
      } else if (l1.val < l2.val) {
          curr.next = new ListNode(l1.val);
          l1 = l1.next;
      } else {
          curr.next = new ListNode(l2.val);
          l2 = l2.next;
      }
      curr = curr.next
  }
  
  return list.next;
};