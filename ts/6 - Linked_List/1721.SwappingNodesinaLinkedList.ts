/* 
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let current = head;
    let n = k - 1;
    while (n !== 0) {
        current = (current as ListNode).next;
        n--;
    }

    let l = current;
    let r = head;

    while (current?.next) {
        current = (current as ListNode).next;
        r = (r as ListNode).next;
    }

    [(l as ListNode).val, (r as ListNode).val] = [(r as ListNode).val, (l as ListNode).val];

    return head;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
