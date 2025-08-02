/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

/* ------------------------------------------------------------------------------- */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const root = new ListNode(0, head);
    let fast = head,
        slow = root;

    while (fast && n > 0) {
        fast = fast.next;
        n -= 1;
    }

    while (fast) {
        fast = (fast as ListNode).next;
        slow = slow.next as ListNode;
    }

    slow.next = (slow.next as ListNode).next as ListNode;

    return root.next;
}

/*
T.C.: O(N)
S.C.: O(1)
*/
/* ------------------------------------------------------------------------------- */
