/* 
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.
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

function pairSum(head: ListNode | null): number {
    let fast = head,
        slow = head;
    let prev: ListNode | null = null;

    while (fast && fast.next) {
        fast = fast.next.next;

        // reverse the first half of the list
        const next = slow?.next as ListNode;
        (slow as ListNode).next = prev;
        prev = slow;
        slow = next;
    }

    let result = 0;

    while (prev) {
        result = Math.max(result, prev.val + (slow as ListNode).val);
        prev = prev.next;
        slow = (slow as ListNode).next;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)

*/
/* ------------------------------------------------------------------------------- */
