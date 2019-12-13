/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let next = head, arr = [];
    while (next) {
        arr.push(next);
        next = next.next;
    }
    let len = arr.length;
    n -= 1;
    if (!arr[len - n - 2] && !arr[len - n]) {
        return null;
    } else if (!arr[len - n - 2]) {
        return arr[len - n];
    } else if (!arr[len - n]) {
        arr[len - n - 2].next = null;
        return head;
    } else {
        arr[len - n - 2].next = arr[len - n];
        return head;
    }
};