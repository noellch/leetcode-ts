/* 
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
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

/* ------------------------------------------------------------------------------- */

// function reorderList(head: ListNode | null): void {
//     const queue: ListNode[] = []
//     let node = head

//     while (node) {
//         queue.push(node)
//         node = node.next
//     }

//     let secondHalf = true
//     let lp = 1,
//         rp = queue.length - 1
//     let next: ListNode

//     node = head

//     while (lp <= rp) {
//         next = secondHalf ? queue[rp--] : queue[lp++]
//         node.next = next
//         node = node.next
//         secondHalf = !secondHalf
//     }

//     node.next = null
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let fast = head?.next,
        slow = head;

    while (slow && fast && fast?.next) {
        fast = fast.next?.next;
        slow = slow.next;
    }

    let second = (slow as ListNode).next;
    (slow as ListNode).next = null;
    let prev: ListNode | null = null,
        next: ListNode | null = null;

    while (second) {
        next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    let first = head,
        firstNext: ListNode | null = null,
        secondNext: ListNode | null = null;
    second = prev;

    while (second) {
        firstNext = (first as ListNode).next;
        secondNext = (second as ListNode).next;
        (first as ListNode).next = second;
        second.next = firstNext;
        first = firstNext;
        second = secondNext;
    }
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
