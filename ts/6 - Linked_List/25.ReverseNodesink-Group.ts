/* 
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const root = new ListNode(0, head);
    let groupPrev = root;

    while (true) {
        const kth = getKthNode(groupPrev, k);
        if (!kth) break;

        const groupNext = kth.next;

        let prev = kth.next,
            current = groupPrev.next;
        while (current !== groupNext) {
            const next = (current as ListNode).next;
            (current as ListNode).next = prev;
            prev = current;
            current = next;
        }

        const temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp as ListNode;
    }
    return root.next;
}

function getKthNode(current: ListNode | null, k: number) {
    while (current && k) {
        current = current.next;
        --k;
    }

    return current;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
