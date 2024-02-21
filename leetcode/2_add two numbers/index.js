/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const n1 = +l1.join("");
    const n2 = +l2.join("");
    
    const res = n1 + n2;
    
    return res.toString().split("").reverse().map(Number);
};
