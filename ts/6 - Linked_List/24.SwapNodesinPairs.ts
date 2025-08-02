/* 
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
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

function swapPairs(head: ListNode | null): ListNode | null {
    let root: ListNode | null = new ListNode(0, head);
    let current = head,
        pairPrev = root;

    while (current && current.next) {
        const pairNext = current.next?.next;

        const second = (current as ListNode).next;
        (second as ListNode).next = current;
        current.next = pairNext;

        pairPrev.next = second;
        pairPrev = current;
        current = pairNext;
    }

    return root.next;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
