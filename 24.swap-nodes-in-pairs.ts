/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  const fakeNode = new ListNode(0);
  fakeNode.next = head;
  let curr = fakeNode;
  while (curr && curr.next && curr.next.next) {
    let firstNode = curr.next;
    let secondNode = curr.next.next;
    let thirdNode = curr.next.next.next;

    curr.next = secondNode;
    secondNode.next = firstNode;
    firstNode.next = thirdNode;
    curr = firstNode;
  }
  return fakeNode.next;
}
// @lc code=end
