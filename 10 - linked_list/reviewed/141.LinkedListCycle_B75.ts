/* Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false. */

class ListNode {
    val: number;
    next: ListNode | null;
    visited: boolean;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function hasCycle(head: ListNode | null): boolean {
    let f = head,
        s = head;

    while (f && s && f.next) {
        f = f.next.next;
        s = s.next;

        if (f === s) return true;
    }

    return false;
}

/**
 * Floyd’s Cycle
 * 定義一快一慢的 pointer，若 linked list 就存在 cycle，這兩個 pointer 早晚會相遇。
 */

/**
 * T.C.: O(n) + O(n) 快慢指針最多走 n 步
 * T.C.: O(1)
 */
