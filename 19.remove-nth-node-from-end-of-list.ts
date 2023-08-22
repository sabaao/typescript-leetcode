/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

import { link } from "fs";

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead = new ListNode(0, head);
  let slow = newHead;
  let fast = newHead;

  while (n--) {
    fast = fast?.next!;
  }

  while (fast?.next) {
    fast = fast.next;
    slow = slow?.next!;
  }

  slow.next = slow?.next!.next;
  return newHead.next;
}
// @lc code=end
