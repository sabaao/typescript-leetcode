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


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1==null && l2==null){
        return null;
    }

    if(l1==null){
        return l2;
    }

    if(l2==null){
        return l1;
    }
    
    let result_head = new ListNode();
    let result = result_head;
    let carry: number = 0;
    while(l1 || l2){
        let sum: number = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = 0;
        if(sum >=10){
            carry = 1;
            sum -=10;
        }
        let tmp = new ListNode(sum);
        result.next = tmp;
        result = result.next;
        
        l1 = l1?.next;
        l2 = l2?.next;
    }

    if(carry==1){
        let tmp = new ListNode(carry);
        result.next = tmp;
    }

    return result_head.next;
};