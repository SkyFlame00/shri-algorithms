/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1Next = l1;
  let l2Next = l2;
  let sumList = null;
  let parent = null;
  let add = 0;
  
  while (!!l1Next || !!l2Next) {
	//   console.log(l1Next, l2Next)

      let current;
      
      if (!parent) {
          sumList = current = parent = {};
      } else {
          parent.next = {};
          current = parent = parent.next;
      }
      
      let val1, val2;
      
      if (!!l1Next && !!l2Next) {
          val1 = l1Next.val;
          val2 = l2Next.val;
      } else {
          val1 = (l1Next || l2Next).val;
          val2 = 0;
      }
      
	  let val = val1 + val2 + add;
	  
	//   console.log(val)
      
      if (val >= 10) {
          val -= 10;
          add = 1;
      } else { add = 0; }
      
      current.val = val;
      current.next = null;
      
      l1Next = l1Next && l1Next.next;
      l2Next = l2Next && l2Next.next;
  }
  console.log(sumList)
  if (add === 1) {
      parent.next = {
          val: add,
          next: null
      };
  }
  
  return sumList;
};



function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(1);

let l2 = new ListNode(9);

l2.next = new ListNode(9);

console.log(addTwoNumbers(l1, l2));