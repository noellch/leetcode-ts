/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const root = new ListNode();
    let current = root;
    let carry = 0;

    while (l1 || l2 || carry) {
        let l1Val = l1?.val ?? 0;
        let l2Val = l2?.val ?? 0;

        const val = l1Val + l2Val + carry;
        const digit = val % 10;
        carry = Math.floor(val / 10);

        current.next = new ListNode(digit);

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
        current = current.next;
    }

    return root.next;
}

/*
T.C.: O(Max(M + N))
S.C.: O(Max(M + N))
*/

/* ------------------------------------------------------------------------------- */
